const DEBUGGER_VERSION = "1.3";

const promisify = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (result) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(result);
      }
    });
  });
};

const attachDebugger = (tabId) => {
  return promisify(chrome.debugger.attach, { tabId }, DEBUGGER_VERSION);
};

const detachDebugger = (tabId) => {
  return promisify(chrome.debugger.detach, { tabId });
};

const sendDebuggerCommand = (tabId, method, params = {}) => {
  return promisify(chrome.debugger.sendCommand, { tabId }, method, params);
};

const base64ToBlob = (base64, contentType) => {
  const binary = atob(base64);
  const length = binary.length;
  const buffer = new Uint8Array(length);
  for (let i = 0; i < length; i += 1) {
    buffer[i] = binary.charCodeAt(i);
  }
  return new Blob([buffer], { type: contentType });
};

const downloadPdf = async (base64) => {
  if (typeof URL !== "undefined" && typeof URL.createObjectURL === "function") {
    const blob = base64ToBlob(base64, "application/pdf");
    const objectUrl = URL.createObjectURL(blob);
    try {
      await promisify(chrome.downloads.download, { url: objectUrl, filename: "page.pdf", saveAs: false });
    } finally {
      setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
    }
    return;
  }

  const dataUrl = `data:application/pdf;base64,${base64}`;
  await promisify(chrome.downloads.download, { url: dataUrl, filename: "page.pdf", saveAs: false });
};

const generatePdf = async (tabId) => {
  try {
    await attachDebugger(tabId);
  } catch (error) {
    throw new Error(`Unable to attach debugger: ${error.message}`);
  }

  try {
    await sendDebuggerCommand(tabId, "Emulation.setEmulatedMedia", { media: "print" });
    const response = await sendDebuggerCommand(tabId, "Page.printToPDF", {
      printBackground: true,
      preferCSSPageSize: true,
      marginTop: 0.4,
      marginBottom: 0.4,
      marginLeft: 0.4,
      marginRight: 0.4,
      scale: 1,
    });

    if (!response || !response.data) {
      throw new Error("PDF generation returned no data.");
    }

    return response.data;
  } finally {
    try {
      await detachDebugger(tabId);
    } catch (error) {
      console.warn("Failed to detach debugger:", error);
    }
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!request || !request.action || !request.tabId) {
    return;
  }

  if (request.action === "triggerButtons") {
    chrome.scripting.executeScript(
      {
        target: { tabId: request.tabId },
        files: ["content.js"],
      },
      (results) => {
        if (chrome.runtime.lastError) {
          sendResponse({ success: false, error: chrome.runtime.lastError.message });
          return;
        }
        sendResponse({ success: true, message: "Clicked matching buttons." });
      }
    );

    return true;
  }

  if (request.action === "exportPdf") {
    (async () => {
      try {
        await chrome.scripting.executeScript({
          target: { tabId: request.tabId },
          files: ["pdf-scroller.js"],
        });

        const pdfBase64 = await generatePdf(request.tabId);
        await downloadPdf(pdfBase64);
        sendResponse({ success: true, message: "PDF saved to your Downloads folder." });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();

    return true;
  }
});

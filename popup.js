const triggerButton = document.getElementById("triggerButton");
const exportButton = document.getElementById("exportButton");
const statusEl = document.getElementById("status");

const setButtonsEnabled = (enabled) => {
  triggerButton.disabled = !enabled;
  exportButton.disabled = !enabled;
};

const setStatus = (text, isError = false) => {
  statusEl.textContent = text;
  statusEl.style.color = isError ? "#b91c1c" : "#374151";
};

const sendAction = async (action) => {
  setButtonsEnabled(false);
  setStatus(action === "triggerButtons" ? "Triggering buttons…" : "Preparing PDF…");

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) {
      throw new Error("No active tab available.");
    }

    const response = await chrome.runtime.sendMessage({ action, tabId: tab.id });
    if (!response?.success) {
      throw new Error(response?.error || "Unknown error.");
    }

    setStatus(response.message || "Done.");
  } catch (error) {
    setStatus(error.message || "Action failed.", true);
  } finally {
    setButtonsEnabled(true);
  }
};

triggerButton.addEventListener("click", () => sendAction("triggerButtons"));
exportButton.addEventListener("click", () => sendAction("exportPdf"));

let SCREENSHOTS = [];

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  const {
    captureScreen,
    takeScreenshot,
    lastFrameHeight,
    lastFrame,
    offsetHeight,
    bottomOffset,
    offsetWidth,
    platform,
    dowmloadImage,
    totalframes,
  } = request;

  const captureScreenFunc = async () => {
    return new Promise((resolve, reject) => {
      chrome.tabs.captureVisibleTab(null, { format: "png" }, (screenshot) => {
        resolve(screenshot);
      });
    });
  };

  if (captureScreen) {
    let SSUrl = await captureScreenFunc();

    let frameObj = {
      url: SSUrl,
      lastFrame,
      lastFrameHeight,
      offsetHeight,
      bottomOffset,
      offsetWidth,
      platform,
    };

    SCREENSHOTS.push(frameObj);

    chrome.runtime.sendMessage(
      {
        message: "SCROLLED",
        img: SSUrl,
        totalframes,
        framesCovered: SCREENSHOTS.length,
        lastFrame: lastFrame,
      },
      function (response) {}
    );

    chrome.tabs.sendMessage(sender.tab.id, { capture: true });
  }

  if (takeScreenshot) {
    chrome.tabs.sendMessage(sender.tab.id, {
      message: "TRIGGER_MERGE",
      SCREENSHOTS: SCREENSHOTS,
    });
  }

  if (dowmloadImage) {
    SCREENSHOTS = [];
  }
});

chrome.gcm.onMessage.addListener(function () {
  sendNotification();
});


const downloadPage = () => {
  chrome.downloads.download({
    filename: "WebpagetoPdfConverter.pdf",
    url: data,
  });
};


const sendNotification = () => {
  chrome.notifications.create(
    {
      type: "basic",

      iconUrl: chrome.runtime.getURL("./Icons/icon16.png"),
      title: "Hey,😃!",
      message: "Thanks for installing webpage to pdf!",
      silent: false,
    },
    () => {}
  );
};

chrome.runtime.onInstalled.addListener((details) => {
  chrome.tabs.query(
    {
      currentWindow: true,
    },
    function gotTabs(tabs) {
      for (let i = 0; i < tabs.length; i++) {
        chrome.scripting.executeScript({
          target: {
            tabId: tabs[i].id,
          },
          files: ["libs/jquery.min.js"],
        });

        chrome.scripting.executeScript({
          target: {
            tabId: tabs[i].id,
          },
          files: ["content/content.js"],
        });   

        chrome.scripting.insertCSS({
          target: {
            tabId: tabs[i].id,
          },
          files: ["css/styles.css"],
        });
      }
    }
  );
  chrome.storage.local.set(
    {
      file: "png",
    },
    function () {}
  );
});

/* COMMON HELPERS */
var webpageHeight = $(document).height();
var bodyBackgroundColor = () => {
  return window
    .getComputedStyle(document.body)
    .getPropertyValue("background-color");
};

/* HELPER TO FIND THE HEIGHTEST ELEMENT WITH SCROLL */
function heightestElement() {
  const isScrollable = function (node) {
    let overflowY = window.getComputedStyle(node)["overflow-y"];
    return (
      (overflowY === "scroll" || overflowY === "auto") &&
      node.scrollHeight > node.clientHeight &&
      node.clientHeight !== 0 &&
      node.scrollTop == 0
    );
  };

  const isBodyScrollable = function (node) {
    return document.body.scrollHeight > window.innerHeight;
  };

  let allElems = document.body.getElementsByTagName("*");
  let body = document.getElementsByTagName("body")[0];

  let heightestElem = isBodyScrollable(body) ? body : null;

  for (let i = 0; i < allElems.length; i++) {
    let elem = allElems[i];

    if (
      elem.scrollHeight >= elem.clientHeight &&
      isScrollable(elem) &&
      elem.scrollHeight - elem.clientHeight > 50
    ) {
      if (!heightestElem) {
        heightestElem = elem;
        continue;
      }

      if (elem.scrollHeight >= heightestElem.scrollHeight) {
        heightestElem = elem;
      }
    }
  }


  return !heightestElem ? body : heightestElem;
}

/* GET TOTAL HEIGHT OF DOCUMENT */
const getTotalHeight = () => {
  var pageHeight = 0;

  function findLargestNode(nodesList) {
    for (var i = nodesList.length - 1; i >= 0; i--) {
      if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
        var elHeight = Math.max(
          nodesList[i].scrollHeight,
          nodesList[i].clientHeight
        );
        pageHeight = Math.max(elHeight, pageHeight);
      }
      if (nodesList[i].childNodes.length)
        findLargestNode(nodesList[i].childNodes);
    }
  }

  findLargestNode(document.documentElement.childNodes);

  return pageHeight;
};

/* HANDLE FIXED ELEMENTS */
var handleFixedElements = [];

var stickyAndFixedElements = () => {
  let elems = $("*").filter(function () {
    return (
      $(this).css("position").toLowerCase().indexOf("fixed") > -1 ||
      $(this).css("position").toLowerCase().indexOf("sticky") > -1
    );
  });

  return elems;
};

/* CHECK IF AN ELEMENT EXISTS IN VIEWPORT */
var isInViewport = (element) => {
  const rect = element.getBoundingClientRect();

  if (
    rect.y > 0 &&
    rect.y < window.innerHeight &&
    rect.y < element.clientHeight
  )
    return true;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/* HIDE FIXED AND STICKY ELEMENTS */
var ForStickyAndFixedElems = (heightestElem) => {
  return new Promise((resolve, reject) => {
    let fixedElements = stickyAndFixedElements() || [];

    for (let i = 0; i < fixedElements.length; i++) {
      let fElem = fixedElements[i];

      fElem.style.visibility = "hidden";
    }
    resolve();
  });
};

var forFixedElements = async () => {
  return new Promise((resolve, reject) => {
    let fixedElements = stickyAndFixedElements() || [];

    for (let i = 0; i < fixedElements.length; i++) {
      let fElem = fixedElements[i];

      if (fElem == document.body) continue;

      let fElemClass =
        fElem.getAttribute("class") &&
        fElem.getAttribute("class").split(" ").join(".")
          ? "." + fElem.getAttribute("class").split(" ").join(".")
          : null;
      let fElemId =
        fElem.getAttribute("id") && fElem.getAttribute("id")
          ? "#" + fElem.getAttribute("id")
          : null;

      if (handleFixedElements.includes(fElem)) {
        continue;
      }

      if (isInViewport(fElem)) {
        if (fElemId) {
          fElemId = fElemId.split("#")[1];
          document.getElementById(fElemId).style.position = "absolute";
          handleFixedElements.push(fElem);
        } else if (fElemClass) {
          fElemClass = fElemClass.split(".")[1];
          document.getElementsByClassName(fElemClass)[0].style.position =
            "absolute";
          handleFixedElements.push(fElem);
        }
      }
    }
    resolve();
  });
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var calculateAgainFrames = async (
  heightestElem,
  frameCovered,
  totalBodyHeight,
  heightCovered,
  offsetHeight,
  viewportHeight
) => {
  return new Promise((resolve, reject) => {
    let frames = Math.ceil(
      (heightestElem.scrollHeight
        ? heightestElem.scrollHeight
        : getTotalHeight()) / viewportHeight
    );

    if (frameCovered == frames) {
      let newframes = Math.ceil(
        (totalBodyHeight - heightCovered) / offsetHeight
      );
      if (!newframes == 0) {
        frames = frames + newframes - 1;
      }
    }

    if (frames == "Infinity") {
      frames = 0;
    }

    resolve(frames);
  });
};

var removeAllExceptHeighestElement = async (heightest, rects) => {
  return new Promise((resolve, reject) => {
    $(heightest)
      .siblings()
      .each(function (e) {
        $(this).css({
          visibility: "hidden",
          opacity: 0,
        });
      });
    $(heightest)
      .parents()
      .siblings()
      .each(function (e) {
        $(this).css({
          visibility: "hidden",
          opacity: 0,
        });
      });

    resolve();
  });
};

var capture = async (
  lastFrame = false,
  lastFrameHeight = 0,
  offsetHeight = 948,
  bottomOffset = 0,
  offsetWidth = 1905,
  totalframes,
  body,
  platform
) => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      {
        captureScreen: true,
        lastFrame,
        bottomOffset,
        lastFrameHeight,
        offsetHeight,
        offsetWidth,
        platform,
        totalframes,
      },
      function (response) {
        function resolver(request, sender, sendResponse) {
          if (request.capture) {
            chrome.runtime.onMessage.removeListener(resolver);
            resolve();
          }
        }

        chrome.runtime.onMessage.addListener(resolver);
      }
    );
  });
};

const mainFunction = async (platform) => {
  let heightestElem, viewportHeight, totalBodyHeight, rects;
  let heightCovered = 0;
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let frames = 0;
  let frameCovered = 0;
  let lastFrame = false;
  let body = heightestElem == document.body;
  let isChangeInScrollHeight = false;

  /* PLATFORM SPECIFIC */
  switch (platform) {
    case "youtube":
      heightestElem = document.body;
      viewportHeight =
        heightestElem == document.body
          ? window.innerHeight
          : heightestElem.offsetHeight;
      totalBodyHeight = heightestElem.scrollHeight
        ? heightestElem.scrollHeight
        : getTotalHeight();
      window.scroll({ left: 0, top: 0, behavior: "smooth" });
      heightestElem.scrollBy({
        left: 0,
        top: -heightestElem.scrollTop,
        behavior: "smooth",
      });
      break;
    case "chatgpt":
      heightestElem = document
        .querySelectorAll(".h-full")[3]
        .querySelectorAll("div")[0];
      viewportHeight =
        heightestElem == document.body
          ? window.innerHeight
          : heightestElem.offsetHeight;
      totalBodyHeight = heightestElem.scrollHeight
        ? heightestElem.scrollHeight
        : getTotalHeight();
      heightestElem.scrollTo(0, 0);
      break;
    default:
      heightestElem = heightestElement();
      viewportHeight =
        heightestElem == document.body
          ? window.innerHeight
          : heightestElem.offsetHeight;
      totalBodyHeight = heightestElem.scrollHeight
        ? heightestElem.scrollHeight
        : getTotalHeight();
      if (heightestElem == document.body) {
        window.scroll({ left: 0, top: 0, behavior: "smooth" });
      } else {
        heightestElem.scrollTo(0, 0);
      }
      break;
  }

  /* COMMON TO ALL PLATFORMS */
  frames = Math.ceil(totalBodyHeight / windowHeight);

  if (frames == 1 && totalBodyHeight < windowHeight) {
    frames = 2;
  }

  rects = heightestElem.getBoundingClientRect();

  let lastFrameHeight = Math.abs(totalBodyHeight - frames * windowHeight);
  let offsetHeight = windowHeight;
  let offsetWidth = windowWidth;

  let bottomOffset =
    heightestElem != document.body ? windowHeight - rects.bottom : -1;

  /* HIDE SCROLL AND SCROLL TO TOP */
  document.body.style.overflowX = "hidden";
  heightestElem.style.overflowX = "hidden";
  document.body.style.overflowY = "hidden";
  heightestElem.style.overflowY = "hidden";

  await sleep(1000);

  /* LOOP THROUGH, SCOLL PAGE AND CAPTURE */
  while (heightCovered < totalBodyHeight) {
    if (frameCovered + 1 >= frames || heightCovered > 20000) {
      lastFrame = true;

      lastFrameHeight = totalBodyHeight - heightCovered;

      if (lastFrameHeight > viewportHeight) {
        lastFrameHeight = 0;
      }
    } else {
      lastFrame = false;
    }

    if (frameCovered == 0) {
      switch (platform) {
        case "twitter":
          document.body.style.overflowX = "unset";
          heightestElem.style.overflowX = "unset";
          document.body.style.overflowY = "unset";
          heightestElem.style.overflowY = "unset";
          break;
        case "facebook":
          document.body.style.overflowX = "unset";
          heightestElem.style.overflowX = "unset";
          document.body.style.overflowY = "unset";
          heightestElem.style.overflowY = "unset";
          break;
        case "adobe":
          $("canvas").css({
            visibility: "visible",
            opacity: 1,
          });
          break;
        default:
          break;
      }
    }

    /* CAPTURE */
    await capture(
      lastFrame,
      lastFrameHeight,
      offsetHeight,
      bottomOffset,
      offsetWidth,
      frames,
      body,
      platform
    );

    frameCovered++;

    let unLoadedHeight =
      heightestElem.scrollHeight - viewportHeight * (frameCovered + 1);

    if (heightestElem) {
      if (heightestElem == document.body) {
        window.scrollBy(0, viewportHeight);
      } else {
        heightestElem.scrollBy(0, viewportHeight);
      }
    }

    await sleep(500);

    // HANDLE LAZY LOADING
    isChangeInScrollHeight = totalBodyHeight != heightestElem.scrollHeight;

    if (unLoadedHeight < 0 && isChangeInScrollHeight) {
      heightestElem.scrollBy(0, -unLoadedHeight);
      await sleep(500);
    }

    await ForStickyAndFixedElems(heightestElem);

    /* AFTER CAPTURE */
    switch (platform) {
      default:
        totalBodyHeight = heightestElem.scrollHeight
          ? heightestElem.scrollHeight
          : getTotalHeight();
        offsetHeight = heightestElem.offsetHeight
          ? heightestElem.offsetHeight
          : windowHeight;
        offsetWidth = heightestElem.offsetWidth;
        bottomOffset =
          heightestElem != document.body ? windowHeight - rects.bottom : -1;

        break;
    }

    if (frameCovered == 1) {
      await sleep(500);
    }

    heightCovered += viewportHeight;

    if (offsetWidth == 1) {
      break;
    }

    frames = await calculateAgainFrames(
      heightestElem,
      frameCovered,
      totalBodyHeight,
      heightCovered,
      offsetHeight,
      viewportHeight
    );

    if (heightestElem != document.body) {
      await removeAllExceptHeighestElement(heightestElem, rects);
      await sleep(500);
    }

    if (lastFrame) {
      break;
    }

  }

  chrome.runtime.sendMessage({
    takeScreenshot: true,
    websiteUrl: window.location.href,
  });
};

const innerScrollMerging = async (SCREENSHOTS) => {
  return new Promise(async (resolve, reject) => {
    let tempImg = new Image();
    tempImg.src = SCREENSHOTS[0].url;
    let finalUrl;

    await tempImg.decode();
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "c");
    const ctx = canvas.getContext("2d");

    let lf = SCREENSHOTS[0];

    let windowHeight = window.innerHeight;
    let mywidth = tempImg.naturalWidth;

    canvas.width = mywidth;
    canvas.height = windowHeight * SCREENSHOTS.length;

    let heightRatio = tempImg.naturalHeight / SCREENSHOTS[0].offsetHeight;

    // let heightRatio = 1;

    let x = 0,
      y = 0,
      longest = 0,
      canvHeight = 0;

    for (let i = 0; i < SCREENSHOTS.length; i++) {
      let screenshotObj = SCREENSHOTS[i];

      const img = new Image();
      img.crossOrigin = "";
      img.src = screenshotObj.url;

      await img.decode();

      if (
        screenshotObj.lastFrame &&
        screenshotObj.lastFrameHeight != 0 &&
        i + 1 == SCREENSHOTS.length
      ) {
        canvHeight += screenshotObj.lastFrameHeight * heightRatio;
        continue;
      }

      if (screenshotObj.offsetHeight < windowHeight) {
        canvHeight += screenshotObj.offsetHeight * heightRatio;
        continue;
      }

      canvHeight += img.naturalHeight;

      // if (Math.sign(screenshotObj.bottomOffset) !== -1) {
      //     canvHeight = canvHeight - (screenshotObj.bottomOffset * heightRatio)
      // }

      if (SCREENSHOTS[0].offsetHeight > longest) {
        longest = SCREENSHOTS[0].offsetHeight;
      }
    }

    canvas.height = canvHeight;

    // canvas.height = (canvHeight)

    for (let i = 0; i < SCREENSHOTS.length; i++) {
      let screenshotObj = SCREENSHOTS[i];

      const img = new Image();
      img.crossOrigin = "";
      img.src = screenshotObj.url;

      await img.decode();

      if (Math.sign(screenshotObj.bottomOffset) === -1) {
        screenshotObj.bottomOffset = 0;
      }

      if (screenshotObj.offsetHeight) {
        if (screenshotObj.offsetHeight <= SCREENSHOTS[0].offsetHeight) {
          if (
            screenshotObj.lastFrame &&
            screenshotObj.lastFrameHeight != 0 &&
            i + 1 == SCREENSHOTS.length
          ) {
            ctx.drawImage(
              img,
              x,
              (SCREENSHOTS[0].offsetHeight -
                (screenshotObj.lastFrameHeight + screenshotObj.bottomOffset)) *
                heightRatio,
              mywidth,
              screenshotObj.lastFrameHeight * heightRatio,
              x,
              y * heightRatio,
              mywidth,
              screenshotObj.lastFrameHeight * heightRatio
            );

            y = y + screenshotObj.lastFrameHeight;

            /* TO APPEND BOTTOM CONTENT AT LAST */
            if (screenshotObj.bottomOffset) {
              const firstImage = new Image();
              firstImage.crossOrigin = "";
              firstImage.src = SCREENSHOTS[0].url;

              await firstImage.decode();

              ctx.drawImage(
                firstImage,
                x,
                (SCREENSHOTS[0].offsetHeight - screenshotObj.bottomOffset) *
                  heightRatio,
                mywidth,
                screenshotObj.bottomOffset * heightRatio,
                x,
                y * heightRatio,
                mywidth,
                screenshotObj.bottomOffset * heightRatio
              );
            }

            finalUrl = canvas.toDataURL();

            continue;
          }

          let cropHeight;
          let imgHeight;

          if (
            Math.round(
              screenshotObj.offsetHeight + screenshotObj.bottomOffset
            ) == SCREENSHOTS[0].offsetHeight
          ) {
            cropHeight = 0;
            imgHeight = screenshotObj.offsetHeight;
          } else {
            cropHeight =
              SCREENSHOTS[0].offsetHeight - screenshotObj.offsetHeight;
            imgHeight = screenshotObj.offsetHeight - screenshotObj.bottomOffset;
          }

          if (Math.sign(cropHeight) === -1) {
            cropHeight = 0;
          }

          ctx.drawImage(
            img,
            x,
            cropHeight * heightRatio,
            mywidth,
            imgHeight * heightRatio,
            x,
            y * heightRatio,
            mywidth,
            imgHeight * heightRatio
          );
          y = y + imgHeight;
          finalUrl = canvas.toDataURL();

          continue;
        }
      }

      if (screenshotObj.lastFrame && i + 1 == SCREENSHOTS.length) {
        let cropHeight =
          SCREENSHOTS[0].offsetHeight -
          (screenshotObj.lastFrameHeight + screenshotObj.bottomOffset);

        let imgHeight = screenshotObj.lastFrameHeight;

        ctx.drawImage(
          img,
          x,
          cropHeight * heightRatio,
          mywidth,
          imgHeight * heightRatio,
          x,
          y * heightRatio,
          mywidth,
          imgHeight * heightRatio
        );

        y = y + screenshotObj.lastFrameHeight;

        /* TO APPEND BOTTOM CONTENT AT LAST */
        if (screenshotObj.bottomOffset) {
          const firstImage = new Image();
          firstImage.crossOrigin = "";
          firstImage.src = SCREENSHOTS[0].url;

          await firstImage.decode();

          ctx.drawImage(
            firstImage,
            x,
            (SCREENSHOTS[0].offsetHeight - screenshotObj.bottomOffset) *
              heightRatio,
            mywidth,
            screenshotObj.bottomOffset * heightRatio,
            x,
            y * heightRatio,
            mywidth,
            screenshotObj.bottomOffset * heightRatio
          );
        }

        finalUrl = canvas.toDataURL();

        continue;
      } else {
        ctx.drawImage(
          img,
          x,
          0,
          mywidth,
          (SCREENSHOTS[0].offsetHeight - screenshotObj.bottomOffset) *
            heightRatio,
          x,
          y * heightRatio,
          mywidth,
          (SCREENSHOTS[0].offsetHeight - screenshotObj.bottomOffset) *
            heightRatio
        );
        y = y + (SCREENSHOTS[0].offsetHeight - screenshotObj.bottomOffset);
      }

      finalUrl = canvas.toDataURL();
    }

    chrome.runtime.sendMessage({
      dowmloadImage: true,
      imageData: finalUrl,
      message: "pdfData",
    });

    setTimeout(() => {
      window.location.reload();
    }, 1000);

    resolve(finalUrl);
  });
};

//VARIABLES USED
let initialData;
let finalHTML;
let dataToAppend;
let maxHeight = 0;
let highestElement = null;
let delElements = [];

let ifrm = document.createElement("iframe");
ifrm.setAttribute("id", "myframe");

let blurDiv = document.createElement("div");
let contentDiv = document.createElement("div");

blurDiv.setAttribute("id", "blurryDiv");
blurDiv.classList.add("blurpage");

let someEle = document.createElement("div");
let someP = document.createElement("div");

someP.textContent = chrome.i18n.getMessage("appHoverMsg");
someP.style.font = "normal normal normal 16px/21px Roboto";
someP.style.letterSpacing = "0px";
someP.style.color = "#FFFFFF";
someP.style.opacity = "1";
someP.style.paddingTop = "2%";
someP.style.display = "flex";
someP.style.justifyContent = "center";
someP.style.alignItems = "center";
someEle.append(someP);

someEle.style.width = "width: 24.8%;";
someEle.style.height = "30px";
someEle.style.borderRadius = "7px 7px 0px 0px";
someEle.style.opacity = "1";
someEle.style.background = "#A475AF 0% 0% no-repeat padding-box";
someEle.style.marginLeft = "67.2%";
someEle.style.position = "absolute";
someEle.style.zIndex = "9999999999";
someEle.style.right = "24px";

//FETCHING CURRENT PAGE URL
let FetchApi = async (page) => {
  try {
    const response = await fetch(page);
    const data = await response.text();
    printIframe(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

//FOR DISABLING THE OUTERPAGE SCROLL
const disableScroll = () => {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

//PRINTABLE CONTENT
const printIframe = async (dataCame) => {
  ifrm.classList.add("webpagetopdfIframe");
  document.body.append(blurDiv);
  contentDiv.classList.add("containerDiv");
  blurDiv.append(contentDiv);
  disableScroll();
  contentDiv.append(ifrm);

  initialData = dataCame;

  //Virtual DOM for modifying data
  const parser = new DOMParser();
  let dom = parser.parseFromString(initialData, "text/html");

  const deleteThis = (array) => {
    for (eachTag of array) {
      eachTag.remove();
    }
  };
  //Function to remove all the necessary common elements in the page
  const removeItems = () => {
    //To remove Footer elements
    const footerTag = dom.querySelectorAll("footer");
    const navTag = dom.querySelectorAll("nav");
    const frameElements = dom.querySelectorAll("iframe");
    const adFrames = dom.querySelectorAll("ins");

    adFrames.forEach((eachEle) => {
      if (eachEle.className.includes("ad")) {
        eachEle.remove();
      }
    });
    if (footerTag) {
      deleteThis(footerTag);
    }

    //To remove Navigation bars
    if (navTag) {
      deleteThis(navTag);
    }
    frameElements.forEach((eachEle) => {
      eachEle.remove();
    });

    const delTags = [
      "menu",
      "comments",
      "nav",
      "catlinks",
      "trending",
      "navigation",
      "foot",
    ];
    //To remove menus in the page
    const removeMenus = dom.querySelectorAll("div");
    for (el of removeMenus) {
      if (el.className.includes("td-header-template-wrap")) {
        el.remove();
      }
      if (el.id.includes("login")) {
        el.remove();
      }
      if (el.outerText == "" || el.outerText == " ") {
        el.remove();
      }
      if (el.id.includes(delTags[0])) {
        el.remove();
      }
      if (el.className.includes(delTags[0])) {
        el.remove();
      }
      if (el.className.includes(delTags[1])) {
        el.remove();
      }
      if (el.role == delTags[5]) {
        el.style.display = "none";
      }
      if (el.className.includes(delTags[3])) {
        el.remove();
      }
      if (el.className.includes(delTags[2])) {
        el.remove();
      }
      if (el.id.includes(delTags[2])) {
        if (!el.id.includes("belowtopnav")) el.remove();
      }
      if (el.className.includes(delTags[4])) {
        el.remove();
      }
      if (el.className.includes(delTags[6])) {
        el.remove();
      }
    }
  };

  //For removing empty elements like ad containers
  const emptySpan = dom.querySelectorAll("span");
  for (ele of emptySpan) {
    if (ele.outerText == "" || ele.outerText == " ") {
      ele.remove();
    }
  }

  // For removing lazy loading property of images
  const lazyImages = dom.getElementsByTagName("img");
  for (let image of lazyImages) {
    image.removeAttribute("loading");
  }

  //Lazy loading images are getting converted to base64 images
  const imagesOnPage = dom.getElementsByTagName("img");
  for (imag of imagesOnPage) {
    if (imag.dataset.src) {
      imag.setAttribute("src", imag.dataset.src);
    }
  }

  //If we had article tag in the page then we will directly append that article element
  let isArticlePresent = dom.querySelector("article");
  let mainTagPresent = dom.querySelector("main");
  if (isArticlePresent) {
    removeItems();
    dataToAppend = isArticlePresent.outerHTML;
  } else if (mainTagPresent) {
    removeItems();

    dataToAppend = mainTagPresent.outerHTML;
  } else if (window.location.href.includes("google.com")) {
    const allDivs = dom.querySelectorAll("div");
    for (ele of allDivs) {
      if (ele.id == "search" || ele.id.includes("menu")) {
        const gCards = dom.getElementsByTagName("g-card");
        for (el of gCards) {
          el.remove();
        }

        dataToAppend = ele.outerHTML;
      }
    }
  } else {
    //Remove all header Tags in the DOM
    const headerTag = dom.querySelectorAll("header");
    if (headerTag) {
      for (eachTag of headerTag) {
        eachTag.remove();
      }
    }

    removeItems();
    dataToAppend = dom.querySelectorAll("body")[0].outerHTML;
  }

  finalHTML = `<!DOCTYPE html>
  <html>
    <head>
        <style>
        h1{
          margin-bottom: 0.3rem;
          border-bottom: 2px solid #8e8e8e;
          margin-top: 0;
          font-size: 24px;
        }
        h2,h3 {
          font-size: 21px;
          margin-top: 1.125em;
          border-bottom: 1px solid #8e8e8e;
          padding-bottom: 0.25rem;
          margin-top: 0;
          border-bottom: 2px solid #8e8e8e;
        }
        p  {
          margin-top: 0;
          margin-bottom: 1rem;
          line-height: 25px;
          color: #222;
          font-size: 18px;
          font-family: georgia;
        }
        li{
        color: #222;
        font-size: 16px/1.4;
        font-family: georgia
        }
        #printContent img{
          max-width:100%;
          height: auto;
          object-fit: cover;
        }
        a {
          color: black !important;
          font-size: 15px !important;
          font-family: sans-serif !important;
      }
      em{
        color: #222;
        font-size: 10.5px;
        font-family: georgia;
      }
        #header
        {
            display: flex;
            background-color: #FFFCEB;
            height: 80px;
            justify-content: space-between;
            position: fixed; 
            width: 100%;
            z-index:9999999;
            box-shadow: 2px 0px 4px black;
          }
        .buttonclass
        {
          margin: 2% 2%;
          width: 37%;
          display: flex;
          justify-content: space-between;
        }
        #down
        {
            width: 49%;
            height: 45px;
            background: #A475AF 0% 0% no-repeat padding-box;
            border: 1px solid #707070;
            color: #FFFFFF;
            border-radius: 3px;
            opacity: 1;
            font: normal normal bold 17px/20px Roboto;
            cursor: pointer;
            margin-right: 7px;
        }
        #close
        {
            top: 18px;
            left: 1645px;
            width: 49%;
            height: 45px;
            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: 1px solid #707070;
            border-radius: 3px;
            opacity: 1;
            color: #707070;
            font: normal normal bold 17px/20px Roboto;
            cursor: pointer;
        }
       
        #printContent{
          padding-bottom: 5%;
          padding-top: 10%;
          padding-left: 1.5rem;
          font-family: sans-serif;
          padding-right: 1.5rem;
        }
        #toast-container {
          display:flex;
          position: fixed;
          bottom: 78%;
          right: 1%;
          z-index: 999999999;
        }

        #redoOpt{
          width: 43px;
          height: 43px;
          background: #FFFFFF 0% 0% no-repeat padding-box;
          border: 1px solid #707070;
          border-radius: 3px;
          opacity: 1;
          cursor: pointer;
        }
        #undoOpt{
          margin-right: 10%;
          width: 43px;
          height: 43px;
          background: #FFFFFF 0% 0% no-repeat padding-box;
          border: 1px solid #707070;
          border-radius: 3px;
          opacity: 1;
          cursor: pointer;
        }
        .modOptions{
          margin: 2% 2%;
          display: flex;
        }

        #FooterContainer{
          display: flex;
          justify-content: space-evenly;
          background-color: #fffceb;
          z-index: 9999999999;
          bottom: 0;
          position: fixed;
          width: 100%;
          box-shadow: 2px 0px 4px black;
          }

        #RateUsDiv{
          opacity: 1;
          font: normal normal 14px/20px Roboto;
          color: #a475af;
          text-decoration: underline;
          cursor: pointer;
          padding: 6px;
        }
        #FeedbackDiv{
          opacity: 1;
          font: normal normal 14px/20px Roboto;
          color: #a475af;
          text-decoration: underline;
          cursor: pointer;
          padding: 6px;
        }
        </style>
    </head>
    <body id=printBody style="margin: 0px ">
    <div id="header">

      <img id="imgtag"/>

      <div class="modOptions">
        <img id="undoOpt" alt="Undo" />
        <img id="redoOpt" alt="Redo"/>
      </div>

      <div class="buttonclass">
        <button id="down">
        ${chrome.i18n.getMessage("appDownload")}
        </button>
        <button id="close">
        ${chrome.i18n.getMessage("appDiscard")}
        </button>
      </div>

    </div>

    <div id="toast-container"></div>

    <div id=printContent>
        ${dataToAppend}
    </div>

    <div id = "FooterContainer">
      <div id="RateUsDiv">Rate us</div>
      <div id="FeedbackDiv">Feedback</div>
    </div>

    </body>
  </html>`;

  let ifrma =
    ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
  ifrma.document.open();
  ifrma.document.write(finalHTML);

  let curContext = document.querySelector("#myframe").contentWindow.document;
  let editBody = curContext.querySelector("#printContent");

  //For VOOT like websites embedding that site in to the Iframe and disbling the download option
  if (!editBody.outerText || editBody.outerText == undefined) {
    editBody.style.paddingTop = "10%";
    editBody.style.paddingRight = "0%";
    editBody.style.paddingLeft = "0%";
    editBody.innerHTML =
      '<object type="text/html" data="' +
      window.location.href +
      '" width="100%" height="750px"></object>';
    let downloaDisable = curContext.getElementById("down");
    downloaDisable.setAttribute("disabled", true);
  }

  //SHOWING TOAST LIKE MESSAGE ON DELETION AND UNDO
  const showToast = (message, duration) => {
    const toastContainer = curContext.getElementById("toast-container");
    const toast = document.createElement("div");

    const colorContain = document.createElement("div");
    colorContain.innerText = "";
    colorContain.style =
      "width: 7px;height: 67px;background: #A475AF 0% 0% no-repeat padding-box;opacity: 1;";
    toast.style =
      "font: normal normal normal 18px/24px Roboto;letter-spacing: 0px;color: #707070;opacity: 1; width: 150px; height: 67px;align-items: center;justify-content: center; display: flex;background:#FFFCEB 0% 0% no-repeat padding-box;box-shadow: 0px 0px 6px #00000040;opacity: 1;margin-bottom:-25%; ";
    toast.innerText = message;

    toastContainer.appendChild(colorContain);
    toastContainer.appendChild(toast);

    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          toastContainer.removeChild(toast);
          toastContainer.removeChild(colorContain);
        }, 300);
      }, duration);
    }, 0);
  };

  let checkBody = editBody.querySelectorAll("*");

  //FINDING MAXHEIGHT ELEMENTS
  for (let i = 0; i < checkBody.length; i++) {
    if (checkBody[i].outerHTML.includes("printContent")) {
      continue;
    }
    const height = checkBody[i].clientHeight;
    if (height > maxHeight) {
      maxHeight = height;
      highestElement = checkBody[i];
    }
  }

  for (everyElement of checkBody) {
    if (everyElement.clientHeight == maxHeight) {
      everyElement.removeEventListener("click", (e) => {});
      continue;
    } else {
      everyElement.addEventListener("mouseover", function (event) {
        let ourElement = event.target;
        let ourElementTop = ourElement.offsetTop;

        let parentEle = ourElement.parentNode;
        if (event.target.clientHeight != maxHeight) {
          ourElement.style.width = "100%";
          ourElement.style.height = "100%";
          ourElement.style.backgroundColor = "#FF8888";
          ourElement.style.position = "relative";
          ourElement.style.cursor = "pointer";
          someEle.style.top = `${ourElementTop - 30}px`;
          parentEle.insertBefore(someEle, ourElement);
        }
      });
    }

    everyElement.addEventListener("mouseout", function (event) {
      let ourElement = event.target;
      if (!ourElement.id.includes("printContent")) {
        ourElement.style.backgroundColor = "";
        ourElement.style.width = "";
        ourElement.style.height = "";
        ourElement.style.position = "";
        someEle.remove();
      }
    });

    everyElement.addEventListener("click", function (event) {
      //DISABLING THE OPENING OF LINKS WHEN CLICKED
      event.preventDefault();

      let clickedElement = event.target;
      if (clickedElement.clientHeight != maxHeight) {
        if (!delElements.includes(clickedElement)) {
          delElements.push(clickedElement);
          showToast("Section Deleted", 100);
          clickedElement.style.display = "none";
        }
      }
    });
  }

  let modifymargin = curContext.querySelectorAll("*");

  for (e of modifymargin) {
    let styles = window.getComputedStyle(e);
    let marginInPixel = styles.getPropertyValue("margin-left").split("px")[0];

    if (marginInPixel > 50) {
      e.style.marginLeft = "0px";
    }
  }

  let printButton = curContext.getElementById("down");
  let delContainer = curContext.getElementById("header");
  let closeContainer = curContext.getElementById("close");

  let printContainer = curContext.getElementById("printContent");

  let footerContainer = curContext.getElementById("FooterContainer");

  let imgEl = curContext.getElementById("imgtag");
  imgEl.src = chrome.runtime.getURL("./webpagetopdfconverter.png");
  imgEl.style.top = "23px";
  imgEl.style.left = "100px";
  imgEl.style.width = "316px";
  imgEl.style.height = "33px";
  imgEl.style.margin = "2% 3%";

  let undoEl = curContext.getElementById("undoOpt");
  undoEl.src = chrome.runtime.getURL("./undo.png");

  let redoEl = curContext.getElementById("redoOpt");
  redoEl.src = chrome.runtime.getURL("./redo.png");
  let changeEle;

  let earlierChangeEle;
  undoEl.addEventListener("click", () => {
    changeEle = delElements.pop();
    if (!changeEle) {
      showToast(chrome.i18n.getMessage("appRevert"), 100);
    } else {
      earlierChangeEle = changeEle;
      changeEle.style.display = "";
      showToast(chrome.i18n.getMessage("appUndo"), 100);
    }
  });

  redoEl.addEventListener("click", () => {
    if (!changeEle) {
      changeEle = earlierChangeEle;
    }
    if (changeEle.style.display == "none" || !delElements.includes(changeEle)) {
      delElements.push(changeEle);
      showToast(chrome.i18n.getMessage("appDel"), 100);
    }
    changeEle.style.display = "none";
  });

  let RateUsDivContainer = curContext.getElementById("RateUsDiv");
  let FeedbackDiv = curContext.getElementById("FeedbackDiv");

  FeedbackDiv.addEventListener("click", () => {
    const feedBackURL = "https://forms.gle/ZhExrVSE8FhNG7py6";
    window.open(feedBackURL, "_blank");
  });

  RateUsDivContainer.addEventListener("click", () => {
    const extensionId = chrome.runtime.id;
    const rateUsUrl = `https://chrome.google.com/webstore/detail/${extensionId}/reviews`;
    window.open(rateUsUrl, "_blank");
  });

  //PRINTING AND DISCARDING
  let printable = document.querySelector("#myframe").contentWindow;

  printButton.addEventListener("click", () => {
    delContainer.style.display = "none";
    printContainer.style.paddingTop = "0px";
    footerContainer.style.display = "none";
    printable.print();
    printContainer.style.paddingTop = "20%";
    footerContainer.style.display = "";
    delContainer.style =
      "display: flex; background-color: #FFFCEB; height: 80px; justify-content: space-between; position: fixed; width: 100%; z-index:9999999;";
  });
  closeContainer.addEventListener("click", () => {
    document.getElementById("myframe").remove();
    document.getElementById("blurryDiv").remove();

    //FOR ENABLING THE SCROLLING IN ORIGINAL WEBSITE
    window.onscroll = function () {};
  });

  //DISABLING RIGHT CLICK WHEN OUR IFRAME IS OPEN
  ifrma.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });
};

/* LISTENING TO MESSAGE FROM BACKGROUND */
chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.message == "INITIATE_SCREENSHOT") {
    const { websiteUrl } = request;

    let platform = null;

    if (websiteUrl.includes("facebook.com")) {
      platform = "facebook";
    } else if (websiteUrl.includes("youtube.com")) {
      platform = "youtube";
    } else if (websiteUrl.includes("twitter.com")) {
      platform = "twitter";
    }

    mainFunction(platform);
  } else if (request.message == "start") {
    let curTabURL = window.location.href;

    //MOVING TO TOP
    window.scrollTo(0, 0);

    await FetchApi(curTabURL);
  } else if (request.message == "TRIGGER_MERGE") {
    const { SCREENSHOTS } = request;

    innerScrollMerging(SCREENSHOTS);
  }
});

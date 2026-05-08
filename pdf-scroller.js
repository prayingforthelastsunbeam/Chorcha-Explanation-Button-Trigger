(async () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const injectPrintStyles = () => {
    const styleId = "chorcha-pdf-print-style";
    if (document.getElementById(styleId)) {
      return;
    }

    const css = `
      @media print {
        .chorcha-pdf-block,
        .chorcha-pdf-block * {
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
          -webkit-column-break-inside: avoid !important;
        }

        .chorcha-pdf-block {
          display: block !important;
          page-break-after: auto !important;
          margin: 0 !important;
        }

        .chorcha-pdf-block > * {
          page-break-after: avoid !important;
        }

        picture,
        img,
        table,
        pre,
        blockquote,
        figure,
        code,
        .LatexRenderer-module__qDybqa__card,
        .option-css,
        .solution-css,
        .card,
        .infinite-scroll-component,
        .infinite-scroll-component__outerdiv,
        .space-y-4,
        .grid[class*='grid-cols'] {
          break-inside: avoid-page !important;
          page-break-inside: avoid !important;
          -webkit-column-break-inside: avoid !important;
        }

        body,
        html {
          color-adjust: exact !important;
          -webkit-print-color-adjust: exact !important;
          orphans: 3;
          widows: 3;
        }

        @page {
          margin: 0.4in;
        }
      }
    `;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = css;
    document.head?.appendChild(style);
  };

  const isVisible = (element) => {
    const style = window.getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
      return false;
    }
    const rect = element.getBoundingClientRect();
    return rect.width > 10 && rect.height > 10;
  };

  const applyPageBreakProtection = () => {
    const selectors = [
      "[class*='border'][class*='rounded']",
      "[class*='border'][class*='p-5']",
      "[class*='rounded-xl']",
      "[class*='card']",
      "[class*='question']",
      "[class*='solution']",
      "[class*='answer']",
      "[class*='explanation']",
      "[class*='option-css']",
      "[class*='solution-css']",
      "[class*='LatexRenderer-module__qDybqa__card']",
      ".infinite-scroll-component",
      ".infinite-scroll-component__outerdiv",
      "[class*='space-y-4']",
      "[class*='grid-cols']",
      "[class*='container']",
      "[class*='content']",
      "[data-testid*='card']"
    ];

    const candidates = new Set();
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => candidates.add(element));
    });

    const filtered = Array.from(candidates).filter((element) => {
      if (!isVisible(element)) {
        return false;
      }
      const rect = element.getBoundingClientRect();
      if (rect.height < 80 || rect.width < 80) {
        return false;
      }
      const maxCandidateHeight = window.innerHeight * 2.5;
      if (rect.height > maxCandidateHeight) {
        return false;
      }
      if (element.closest(".chorcha-pdf-block") !== null) {
        return false;
      }
      return true;
    });

    filtered.sort((a, b) => {
      const aRect = a.getBoundingClientRect();
      const bRect = b.getBoundingClientRect();
      return bRect.height - aRect.height || bRect.width - aRect.width;
    });

    filtered.forEach((element) => {
      if (element.closest(".chorcha-pdf-block") !== null) {
        return;
      }
      element.classList.add("chorcha-pdf-block");
    });
  };

  const getScrollHeight = () => Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight
  );

  const scrollToBottomAndBack = async () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    await sleep(300);

    let previousHeight = -1;
    let stableCount = 0;
    const maxCycles = 20;

    for (let i = 0; i < maxCycles; i += 1) {
      window.scrollTo({ top: getScrollHeight(), left: 0, behavior: "smooth" });
      await sleep(800);

      const currentHeight = getScrollHeight();
      if (Math.abs(currentHeight - previousHeight) < 4) {
        stableCount += 1;
      } else {
        stableCount = 0;
      }

      previousHeight = currentHeight;
      if (stableCount >= 2) {
        break;
      }
    }

    await sleep(600);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    await sleep(300);
    return true;
  };

  injectPrintStyles();
  applyPageBreakProtection();

  return await scrollToBottomAndBack();
})();

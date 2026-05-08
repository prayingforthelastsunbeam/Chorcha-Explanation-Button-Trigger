(async () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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

  return await scrollToBottomAndBack();
})();

(() => {
  const targetLabels = ["AI ব্যাখ্যা", "ব্যাখ্যা", "Explanation", "সল্যুশন"];

  const normalize = (text = "") => text.replace(/\s+/g, " ").trim();

  const isVisible = (element) => {
    if (!(element instanceof Element)) return false;
    const style = window.getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") return false;
    if (element.getClientRects().length === 0) return false;
    return true;
  };

  const actionable = new Set();
  const addAction = (element) => {
    if (!element || typeof element.click !== "function" || actionable.has(element) || !isVisible(element)) {
      return;
    }
    actionable.add(element);
  };

  const shouldClickLabelButton = (button) => {
    const text = normalize(button.textContent || "");
    if (!text) return false;
    if (!targetLabels.some((label) => text.includes(label))) return false;
    const expanded = button.getAttribute("aria-expanded");
    return expanded !== "true";
  };

  document.querySelectorAll("button, [role='button']").forEach((element) => {
    if (shouldClickLabelButton(element)) {
      addAction(element);
    }
  });

  document.querySelectorAll("[aria-expanded='false']").forEach(addAction);

  document.querySelectorAll("[style*='cursor: pointer']").forEach((element) => {
    if (!isVisible(element)) return;
    const svg = element.querySelector("svg");
    if (!svg) return;
    const svgHtml = svg.outerHTML || "";
    if (!/chevron-down|down/i.test(svgHtml)) return;
    const classes = svg.className?.baseVal || svg.className || "";
    if (/rotate-180/.test(classes)) return;
    addAction(element);
  });

  document.querySelectorAll("button svg").forEach((svg) => {
    const button = svg.closest("button");
    if (!button || button.getAttribute("aria-expanded") === "true") return;
    const svgHtml = svg.outerHTML || "";
    if (/chevron-down|down/i.test(svgHtml)) {
      addAction(button);
    }
  });

  let clicked = 0;
  actionable.forEach((element) => {
    try {
      element.click();
      clicked += 1;
    } catch (error) {
      console.warn("Chorcha Button Trigger: could not click element", element, error);
    }
  });

  console.info(`Chorcha Button Trigger: attempted ${clicked} click(s).`);
})();

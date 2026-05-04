(() => {
  const targetLabels = ["AI ব্যাখ্যা", "ব্যাখ্যা"];

  const normalize = (text) => text.replace(/\s+/g, " ").trim();

  const buttons = Array.from(document.querySelectorAll("button"));
  let clicked = 0;

  buttons.forEach((button) => {
    const text = normalize(button.textContent || "");
    if (targetLabels.some((label) => text.includes(label))) {
      try {
        button.click();
      } catch (error) {
        console.warn("Chorcha Button Trigger: could not click button", button, error);
      }
      clicked += 1;
    }
  });

  console.info(`Chorcha Button Trigger: attempted ${clicked} button click(s).`);
})();

import { trackEvent } from "./tracker";

(function () {
  "use strict";

  /* ===============================
     1. CLICK HANDLING (SINGLE SOURCE)
     - button / tab / link
     - normal text click
  ================================ */
  document.addEventListener("click", (e) => {
    const selection = window.getSelection()?.toString();

    // If user is selecting text, ignore click (selection handled separately)
    if (selection && selection.trim().length >= 3) return;

    // UI elements (buttons, tabs, links)
    const uiEl = e.target.closest(
      "button, a, [role='tab'], [role='button']"
    );

    if (uiEl) {
      trackEvent({
        type: "ui_click",
        tag: uiEl.tagName,
        id: uiEl.id || null,
        text: (uiEl.innerText || "").slice(0, 120),
      });
      return;
    }

    // Plain text click (not button/link)
    const text = e.target?.innerText;
    if (text && text.trim().length >= 3) {
      trackEvent({
        type: "text_click",
        text: text.slice(0, 200),
      });
    }
  });

  /* ===============================
     2. TEXT SELECTION (START → END)
     (LOG ONCE, FINAL TEXT)
  ================================ */
  let selectionStartTime = null;

  document.addEventListener("mousedown", () => {
    selectionStartTime = Date.now();
  });

  document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection()?.toString();

    if (!selectedText || selectedText.trim().length < 3) {
      selectionStartTime = null;
      return;
    }

    trackEvent({
      type: "text_selection",
      selected_text: selectedText.slice(0, 500),
      length: selectedText.length,
      duration_ms: Date.now() - selectionStartTime,
    });

    selectionStartTime = null;
  });

  /* ===============================
     3. SCREENSHOT (PrintScreen)
  ================================ */
  window.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      trackEvent({
        type: "screenshot_attempt",
        key: "PrintScreen",
      });
    }
  });

  /* ===============================
     4. SCREEN RECORD (Ctrl+Shift+X)
     (HEURISTIC ONLY)
  ================================ */
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "x") {
      trackEvent({
        type: "screen_record_attempt",
        shortcut: "Ctrl+Shift+X",
      });
    }
  });
})();

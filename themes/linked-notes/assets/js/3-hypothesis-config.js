function hypothesisCallback() {
  if (!windowIsPopup()) {
    const trigger = document.getElementById("annotate-trigger");
    const initializeHypothesis = () => {
      window.hypothesisConfig = function () {
        return {
          openSidebar: true,
          branding: {
            appBackgroundColor: "#fefefe",
            selectionFontFamily:
              '"Source Serif Pro", Georgia, "Times New Roman", Times, serif',
            annotationFontFamily:
              '"Source Serif Pro", Georgia, "Times New Roman", Times, serif',
          },
          enableExperimentalNewNoteButton: true,
          theme: "clean",
        };
      };
      loadScript("https://hypothes.is/embed.js", "hypothesis-script");
    };
    trigger.addEventListener("click", initializeHypothesis);
  }
}

if (document.readyState !== "loading") {
  hypothesisCallback();
} else {
  window.addEventListener("DOMContentLoaded", () => hypothesisCallback());
}

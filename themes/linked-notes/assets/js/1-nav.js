const navCallback = () => {
  /* since javascript works set the deemphasized nav link color to a disabled color */
  document.documentElement.style.setProperty(
    "--deemphasized-nav-link-color",
    window
      .getComputedStyle(document.body)
      .getPropertyValue("--text-link-disabled-color")
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navListElement = document.querySelector(
        `nav ul li a[href="#${id}"]`
      );
      if (navListElement !== null) {
        if (entry.intersectionRatio > 0) {
          navListElement.parentElement.classList.add("active");
        } else {
          navListElement.parentElement.classList.remove("active");
        }
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });
};

if (document.readyState !== "loading") {
  navCallback();
} else {
  window.addEventListener("DOMContentLoaded", () => navCallback());
}

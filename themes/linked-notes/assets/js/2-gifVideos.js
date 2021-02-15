const gifVideoCallback = () => {
  // remove controls from gif videos
  document
    .querySelectorAll("video.gif")
    .forEach((video) => video.removeAttribute("controls"));
};

if (document.readyState !== "loading") {
  gifVideoCallback();
} else {
  window.addEventListener("DOMContentLoaded", () => gifVideoCallback());
}

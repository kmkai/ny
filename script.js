document.addEventListener("DOMContentLoaded", (event) => {
  const video = document.querySelector("video");
  if (video) {
    video
      .play()
      .catch((error) => console.error("Video autoplay failed:", error));
  }
});

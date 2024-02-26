document.addEventListener("DOMContentLoaded", (event) => {
  const video = document.querySelector("video");
  if (video) {
    video
      .play()
      .catch((error) => console.error("Video autoplay failed:", error));
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  const videoElement = document.querySelector("video");
  const sourceElement = videoElement.querySelector("source");

  // Sjekk om brukeren er på en mobil enhet
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Velg riktig videokilde basert på enhetstypen
  const videoSource = isMobile ? "smallestfile.mp4" : "firstvideo.mp4";

  // Oppdater 'src'-attributtet til 'source'-elementet
  sourceElement.setAttribute("src", videoSource);

  // Last inn videoen på nytt med den nye kilden
  videoElement.load();

  // Forsøk å spille av videoen
  videoElement
    .play()
    .catch((error) => console.error("Video autoplay failed:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  var myVideo = document.getElementById("myVideo");

  function playVideo() {
    if (myVideo.paused) {
      myVideo.play();
    }
  }

  // Prøv å spille av videoen umiddelbart.
  playVideo();

  // Håndterer tilfeller hvor videoen ikke kan spilles av umiddelbart.
  myVideo.addEventListener("canplay", playVideo);
});

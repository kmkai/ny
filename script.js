document.addEventListener("DOMContentLoaded", function () {
  var myVideo = document.getElementById("myVideo");
  myVideo.play().catch(function (error) {
    console.log("Autoplay was prevented.", error);
  });
});

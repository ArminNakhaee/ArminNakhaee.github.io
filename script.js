document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("logo_video");

    video.addEventListener("mouseover", playVideo);

    function playVideo() {
        video.play();
        // video.removeEventListener("mouseover", playVideo);
    }
});
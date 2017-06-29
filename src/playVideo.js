function playVideo(stream,localStream) {
        var video = document.getElementById(localStream);
        video.srcObject = stream;
        video.onloadedmetadata = function () {
            video.play();

        }
}
module.exports =playVideo;
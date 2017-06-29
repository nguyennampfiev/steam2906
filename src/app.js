var openCamera = require("./openCamera.js");
var playVideo = require("./playVideo.js");
var Peer= require("simple-peer");
var $ =require("jquery");
openCamera(function (stream) {
    playVideo(stream, "localStream");
    var p = new Peer({initiator: location.hash === '#init', trickle: false, stream: stream})

    p.on("signal", function (token) {
        $("#txtMySignal").val(JSON.stringify(token));
    })

    $("#btnConnect").click(function () {
        var friendSignal = JSON.parse($("#txtFriend").val());
        p.signal(friendSignal);
    })

    p.on("stream", function (friendStream) {
        playVideo(friendStream, 'friendSteam');
    })
});



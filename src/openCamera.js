
var config={audio:false,video:true};
function  openCamera(callback) {
    navigator.mediaDevices.getUserMedia(config).then(function (stream) {
        callback(stream);
    }).catch(function (err) {
        console.log(err);
    })
};
module.exports = openCamera;
var frame = require("ui/frame");
var Toast = require("nativescript-toast");

module.exports.onNavigatingTo = function onNavigatingTo(args) {};

module.exports.goBack = function () {
    frame.topmost().goBack();
}

module.exports.videoplayerLoaded = function () {
    // do something when video player finishes loading
}

module.exports.videoFinished = function () {
    // do something when video player finishes playing
    Toast.makeText('video has finished playing :)').show();
}

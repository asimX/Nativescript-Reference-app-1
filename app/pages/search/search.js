var frame = require("ui/frame");

module.exports.onNavigatingTo = function onNavigatingTo(args) {};

module.exports.goBack = function () {
    frame.topmost().goBack();
}

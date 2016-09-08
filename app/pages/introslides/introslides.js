var frame = require("ui/frame");
var dialogs = require("ui/dialogs");
var page;
var slideContainer;

module.exports.onNavigatingTo = function onNavigatingTo(args) {};

module.exports.loadSlide = function loadSlide (args) {
    page = args.object;
    slideContainer = page.getViewById('slides');
}

module.exports.goBack = function () {
    frame.topmost().goBack();
}

module.exports.getStarted = function () {
    dialogs.alert({
        title: "Navigating to main page",
        okButtonText: "OK"
    });
}

module.exports.next = function () {
    slideContainer.nextSlide();
}

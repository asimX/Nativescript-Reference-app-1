var frame = require("ui/frame");
var page;
var slideContainer;
var intervalId;

module.exports.onNavigatingTo = function onNavigatingTo(args) { };

module.exports.goBack = function () {
    frame.topmost().goBack();
}


module.exports.loadCarouselInterval = function loadCarouselInterval(args) {
    page = args.object;
    slideContainer = page.getViewById('slides');

    intervalId = setInterval(function () {
        slideContainer.nextSlide();
    }, 5000);
}

module.exports.clearCarouselInterval = function clearCarouselInterval(args) {
    clearInterval(intervalId);
}


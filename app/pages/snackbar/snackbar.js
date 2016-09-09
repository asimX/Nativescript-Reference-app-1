var createViewModel = require("./snackbar-view-model").createViewModel;
var frame = require("ui/frame");

// var frameModule = require("ui/frame");
// var frame = new frameModule.Frame();

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
};

module.exports.goBack = function () {
    // navigate to previous page - requires => var frame = require("ui/frame");
    frame.topmost().goBack();

    // navigate to home page (main activity)
    // frame.navigate("pages/home/home");
}

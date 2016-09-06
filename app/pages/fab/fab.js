var createViewModel = require("./fab-view-model").createViewModel;
var frame = require("ui/frame");
var dialogs = require("ui/dialogs");

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
};

module.exports.goBack = function () {
    frame.topmost().goBack();
}

module.exports.fabTap = function () {
    dialogs.alert({
        title: "FAB tapped",
        okButtonText: "OK"
    });
}

var createViewModel = require("./toast-view-model").createViewModel;
var frame = require("ui/frame");

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
};

module.exports.goBack = function () {
    frame.topmost().goBack();
}

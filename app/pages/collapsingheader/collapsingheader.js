var createViewModel = require("./collapsingheader-view-model").createViewModel;

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
};

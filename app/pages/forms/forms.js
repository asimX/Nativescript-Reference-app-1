var createViewModel = require("./forms-view-model").createViewModel;

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
};

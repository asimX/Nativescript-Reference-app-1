var createViewModel = require("./lists2-view-model").createViewModel;
var frame = require("ui/frame");

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
};

module.exports.goBack = function () {
    frame.topmost().goBack();
}

module.exports.refreshList = function refreshList(args) {

    // Get reference to the PullToRefresh;
    var pullRefresh = args.object;

    // Do work here... and when done call set refreshing 
    // property to false to stop the refreshing
    // loadItems().then(function (resp) {
    //     // ONLY USING A TIMEOUT TO SIMULATE/SHOW OFF THE REFRESHING
    //     setTimeout(function () {
    //         pullRefresh.refreshing = false;
    //     }, 1000);
    // }, function (err) {
    //     pullRefresh.refreshing = false;
    // });

    setTimeout(function () {
        pullRefresh.refreshing = false;
    }, 1500);
}
var Observable = require("data/observable").Observable;
var listViewModule = require("ui/list-view");
var observableArray = require("data/observable-array");

function createViewModel() {
    var viewModel = new Observable({
        users: new ObservableArray([
            { name: "Raymond" },
            { name: "Eugene" },
            { name: "Beauty" },
            { name: "Jerome" },
            { name: "Jennifer" },
            { name: "Joy" },
            { name: "Humphrey" }
        ])
    });

    return viewModel;
}

module.exports.createViewModel = createViewModel;

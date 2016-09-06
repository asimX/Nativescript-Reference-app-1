var Observable = require("data/observable").Observable;
var observableArray = require("data/observable-array");
var viewModel = new Observable();
viewModel.myItems = new observableArray.ObservableArray([]);

function createViewModel() {
    loadItems();

    return viewModel;
}

function loadItems () {
    viewModel.myItems.push({ title: "hello" });
    viewModel.myItems.push({ title: "world" });
}

module.exports.createViewModel = createViewModel;
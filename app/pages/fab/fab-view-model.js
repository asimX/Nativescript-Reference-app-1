var Observable = require("data/observable").Observable;
var observableArray = require("data/observable-array").ObservableArray;
var myItems = new observableArray([
    { title: "hello" }
]);

function createViewModel() {
    var viewModel = new Observable();
    viewModel.set("myItems", myItems);

    return viewModel;
}

module.exports.createViewModel = createViewModel;

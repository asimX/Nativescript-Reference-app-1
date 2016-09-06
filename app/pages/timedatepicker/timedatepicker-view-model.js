var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();

    return viewModel;
}

module.exports.createViewModel = createViewModel;
var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable({
        progress: 10
    });

    return viewModel;
}

module.exports.createViewModel = createViewModel;
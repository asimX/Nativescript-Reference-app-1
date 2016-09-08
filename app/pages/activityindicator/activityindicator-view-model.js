var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();
    
    var busyState = true;

    viewModel.set('loading', busyState);

    viewModel.toogleBusyState = function () {
        busyState = !busyState;
        viewModel.set('loading', busyState);
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
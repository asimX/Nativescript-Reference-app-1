var Observable = require("data/observable").Observable;
var Toast = require("nativescript-toast");

function createViewModel() {
    var viewModel = new Observable({
        toastMessage: ''
    });

    viewModel.showShortToast = function () {
        Toast.makeText(this.toastMessage).show();
    }

    viewModel.showLongToast = function () {
        Toast.makeText(this.toastMessage, "long").show();
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
var Observable = require("data/observable").Observable;
var vibrator = require("nativescript-vibrate");

function createViewModel() {
    var viewModel = new Observable({
        vibrateDuration: ''
    });

    viewModel.vibrate = function () {
        var duration = parseInt(this.vibrateDuration);
        duration = duration == '' ? '1000' : duration;
        vibrator.vibration(duration);
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable({
        hint: 'Default demo hint',
        error: '',
        isErrorEnabled: true,
        isHintAnimationEnabled: true,
        isCounterEnabled: true,
        demoText: ''
    });

    return viewModel;
}

module.exports.createViewModel = createViewModel;
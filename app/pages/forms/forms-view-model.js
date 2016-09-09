var Observable = require("data/observable").Observable;
var frame = require("ui/frame");

function createViewModel() {
    var viewModel = new Observable({
        email: '',
        password: '',
        showPassword: false,
        items: [
            'item 1',
            'item 2',
            'item 3',
            'item 4'
        ],
        message: ''
    });
    
    viewModel.goBack = function() {
        frame.topmost().goBack();
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
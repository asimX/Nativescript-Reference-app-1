var Observable = require("data/observable").Observable;
var frame = require("ui/frame");

function createViewModel() {
    var viewModel = new Observable();
    
    viewModel.goBack = function() {
        frame.topmost().goBack();
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
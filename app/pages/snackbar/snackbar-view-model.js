var Observable = require("data/observable").Observable;
var SnackBar = require("nativescript-snackbar").SnackBar;
var snackbar = new SnackBar();
var dialogs = require("ui/dialogs");

function createViewModel() {
    var viewModel = new Observable({
        message: '',
        action: ''
    });

    viewModel.showSimpleSnackbar = function () {
        snackbar.simple(this.message).then(
            function () {
                // do something after snackbar is dismissed
            }
        );
    }

    viewModel.showActionSnackbar = function () {
        var options = {
            actionText: this.action,
            actionTextColor: '#ff4081',
            snackText: this.message,
            hideDelay: 3500
        };

        snackbar.action(options).then(
            function (args) {
                if (args.command === "Action") {
                    // do stuff
                    dialogs.alert({
                        title: "User wants action to be performed",
                        okButtonText: "OK"
                    });
                }
                else {
                    // do some other stuff
                    dialogs.alert({
                        title: "User doesnt want to perform the said action",
                        okButtonText: "OK"
                    });
                }
            }
        );
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
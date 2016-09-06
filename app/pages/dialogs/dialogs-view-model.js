var Observable = require("data/observable").Observable;
var dialogs = require("ui/dialogs");

function createViewModel() {
    var viewModel = new Observable();

    viewModel.showAlert = function () {
        dialogs.alert({
            title: "Race selection",
            message: "Race chosen: Unicorn",
            okButtonText: "OK"
        }).then(function () {
            // run this after dialog has been dismissed
            console.log("Race chosen!");
        });
    }

    viewModel.showConfirm = function () {
        dialogs.confirm({
            title: "Race selection",
            message: "Are you sure you want to be a Unicorn?",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
        });
    }

    viewModel.showPrompt = function () {
        // inputType property can be dialogs.inputType.password or dialogs.inputType.text.
        dialogs.prompt({
            title: "Name",
            message: "Your message",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Maybe",
            defaultText: "Default text",
            inputType: dialogs.inputType.password
        }).then(function (r) {
            console.log("Dialog result: " + r.result + ", text: " + r.text);
        });
    }

    viewModel.showLogin = function () {
        dialogs.login({
            title: "Login",
            message: "Login",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            // neutralButtonText: "Later",
            userName: "john_doe",
            password: "secret"
        }).then(function (r) {
            console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
        });
    }

    viewModel.showAction = function () {
        dialogs.action({
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        }).then(function (result) {
            console.log("Dialog result: " + result)
        });
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
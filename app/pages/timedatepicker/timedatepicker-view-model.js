var Observable = require("data/observable").Observable;
var dialogs = require("ui/dialogs");

function createViewModel() {
    var viewModel = new Observable({
        time: {
            hour: 9,
            minute: 25
        },
        date: {
            day: 15,
            month: 5,
            year: 2015
        }
    });

    viewModel.showTime = function () {
        dialogs.alert({
            title: "Time picker",
            message: "Time chosen: " + this.time.hour + ":" + this.time.minute,
            okButtonText: "OK"
        }).then(function () {
            // run this after dialog has been dismissed
            console.log("Time chosen!");
        });
    }

    viewModel.showDate = function () {
        dialogs.alert({
            title: "Date picker",
            message: "Date chosen: " + this.date.day + "/" + this.date.month + "/" + this.date.year,
            okButtonText: "OK"
        }).then(function () {
            // run this after dialog has been dismissed
            console.log("Date chosen!");
        });
    }

    return viewModel;
}

module.exports.createViewModel = createViewModel;
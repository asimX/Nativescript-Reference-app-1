var createViewModel = require("./timedatepicker-view-model").createViewModel;
var frame = require("ui/frame");
var timePickerModule = require("ui/time-picker");
var datePickerModule = require("ui/date-picker");
var dialogs = require("ui/dialogs");

var timePicker = null;
var datePicker = null;

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();

    // configure the time picker
    timePicker = new timePickerModule.TimePicker();
    // timePicker.hour = 9;
    // timePicker.minute = 25;

    // configure the date picker
    datePicker = new datePickerModule.DatePicker();
    // datePicker.year = 1980;
    // datePicker.month = 2;
    // datePicker.day = 9;
    datePicker.minDate = new Date(1975, 0, 29);
    datePicker.maxDate = new Date(2045, 4, 12);
};

module.exports.goBack = function () {
    frame.topmost().goBack();
}

module.exports.showTime = function () {
    dialogs.alert({
        title: "Time picker",
        message: "Time chosen: " + timePicker.hour + ":" + timePicker.minute,
        okButtonText: "OK"
    }).then(function () {
        // run this after dialog has been dismissed
        console.log("Time chosen!");
    });
}

module.exports.showDate = function () {
    dialogs.alert({
        title: "Date picker",
        message: "Date chosen: " +  datePicker.day + "/" + datePicker.month + "/" + datePicker.year,
        okButtonText: "OK"
    }).then(function () {
        // run this after dialog has been dismissed
        console.log("Date chosen!");
    });
}

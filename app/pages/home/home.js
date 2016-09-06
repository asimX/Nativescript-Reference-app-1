var createViewModel = require("./home-view-model").createViewModel;
var BasePage = require("../../shared/BasePage");
var topmost = require("ui/frame").topmost;

var HomePage = function() {};
HomePage.prototype = new BasePage();
HomePage.prototype.constructor = HomePage;

// Place any code you want to run when the home page loads here.
HomePage.prototype.contentLoaded = function() {}
module.exports = new HomePage();

module.exports.onNavigatingTo = function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
};

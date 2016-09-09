var topmost = require("ui/frame").topmost;
var Observable = require("data/observable").Observable;

// var frameModule = require("ui/frame");
// var frame = new frameModule.Frame();


var appViewModel = new Observable();
appViewModel.selectedPage = "home";

function BasePage() {}
BasePage.prototype.viewModel = appViewModel
BasePage.prototype.pageLoaded = function(args) {
  var page = args.object;
  page.bindingContext = appViewModel;
}
BasePage.prototype.toggleDrawer = function() {
  var page = topmost().currentPage;
  page.getViewById("drawer").toggleDrawerState();
}
BasePage.prototype.navigate = function(args) {
  var pageName = args.view.text.toLowerCase();
  appViewModel.set("selectedPage", pageName);

  // navigate to a new page using transitions
  var navigationEntry = {
    moduleName: "pages/" + pageName + "/" + pageName,
    animated: true,
    transition: {
      name: "slide",
      duration: 150
    }
  };
  topmost().navigate(navigationEntry);

  // navigate to a new page with no transition
  // topmost().navigate("pages/" + pageName + "/" + pageName);

  // native android transition to new activity
  // frame.navigate("pages/" + pageName + "/" + pageName);
}

module.exports = BasePage;
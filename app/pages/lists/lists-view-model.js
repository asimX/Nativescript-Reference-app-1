var Observable = require("data/observable").Observable;
var observableArray = require("data/observable-array").ObservableArray;
var myItems = new observableArray([
    {
        title: "Me",
        about: "Smart, Hardworking and Loving"
    },
    {
        title: "Mother",
        about: "Sweet, approachable and compassionate... funny too :P"
    },
    {
        title: "Dad",
        about: "Breadwinner. Can be a real pain sometimes but he's cool"
    },
    {
        title: "Eugene",
        about: "Strong willed (and headed), detached and somewhat mysterious"
    },
    {
        title: "Jennifer",
        about: "Very stubborn and opinionated, but is really just like an onion, you have to peel through to see whats really inside... oh and you're probably gonna shed some tears"
    },
    {
        title: "Joy",
        about: "Rude, rude, rude, and self justified for it."
    },
    {
        title: "Humphrey",
        about: "A growing giant"
    },
    {
        title: "Lolade",
        about: "Getting to know her and to love her. It can be hard sometimes but I know that it's worth it."
    },
    {
        title: "Nelly",
        about: "Fun to be with. Can get moody and houses deep seated emotions, but I've never met anyone i cared for more... not yet"
    },
    {
        title: "Osarobo",
        about: "My brother from another mother. We'd meet again soon, and I bet you it'll be good times."
    },
    {
        title: "Godwin",
        about: "Loyal friend. I wish him the best, I just wish that he makes some choices differently, but then again, what do I know."
    },
    {
        title: "Matthew",
        about: "Reserved, recluse, but cool nonetheless"
    }
]);

function createViewModel() {
    var viewModel = new Observable();

    viewModel.set("myItems", myItems);

    return viewModel;
}

module.exports.createViewModel = createViewModel;
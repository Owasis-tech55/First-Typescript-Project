function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You have not selected any item for your sandwich yet");
    }
    else {
        console.log("you selected:".concat(items, " for your sandwich"));
    }
}
orderSandwich();
orderSandwich("chicken", "ketchup", "cheese");
orderSandwich("beaf", "mayonaiose", "sauce", "cheese", "lettuce");

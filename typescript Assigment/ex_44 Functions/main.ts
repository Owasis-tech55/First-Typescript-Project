
function orderSandwich(...items:string[]): void {
    if(items.length === 0) {
        console.log("You have not selected any item for your sandwich yet")
} else {
    console.log(`you selected:${items} for your sandwich`)
}
}
orderSandwich();
orderSandwich("chicken", "ketchup", "cheese");
orderSandwich("beaf", "mayonaiose", "sauce", "cheese", "lettuce");
var pizzas = ["Cheese Pizza", "Pepperoni Pizza", "Pajita Pizza"];
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (var i = 0; i < pizzas.length; i++) {
    "";
    console.log("I like ".concat(pizzas[i]));
}
console.log("I love cheese in the ".concat(pizzas[0], ",\nI really love pepperonis in ").concat(pizzas[1], ",I love the flavor of ").concat(pizzas[2], ". I really love Pizza!!!!"));

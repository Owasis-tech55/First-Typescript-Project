var store_car = function (manufacturer, model) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    return { manufacturer: manufacturer, model: model, features: features };
};
var carDetails = store_car("ferrari", "Laferrari", { "color": "blue" }, { "speed": "350km/h" });
console.log(carDetails);

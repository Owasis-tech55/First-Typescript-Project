//uppercase
var playerName = "Glenn maxwell";
console.log(playerName.toUpperCase());
//lowercase
console.log(playerName.toLowerCase());
//titlecase
//Not the recommanded method
console.log(playerName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
var step1 = playerName.split(" ");
var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.
    substr(1).toLowerCase(); });
var step3 = step2.join("  ");
console.log("Titlecase: ".concat(step3));

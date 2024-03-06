


//uppercase
let playerName = "Glenn maxwell"
console.log(playerName.toUpperCase());

//lowercase
console.log(playerName.toLowerCase());

//titlecase
//Not the recommanded method
console.log(playerName.replace(/\b\w/g,c =>c.toUpperCase()));

let splittoarray = playerName.split(` `);

let converstion = splittoarray.map(word => word.charAt(0).toUpperCase() + word.
substr(1).toLowerCase());

let join = converstion.join(` `);

console.log(`Titlecase: ${join}`);

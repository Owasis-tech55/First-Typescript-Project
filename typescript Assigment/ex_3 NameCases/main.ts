


//uppercase
let playerName = "Glenn maxwell"
console.log(playerName.toUpperCase());

//lowercase
console.log(playerName.toLowerCase());

//titlecase
console.log(playerName.replace(/\b\w/g,c =>c.toUpperCase()));
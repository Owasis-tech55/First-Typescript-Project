
let ordinalNumbers: Array<number> = [0,1,2,3,4,5,6,7,8,9];
for(let val =0; val<ordinalNumbers.length ; val++) {
    if(ordinalNumbers[val] === 1) {
        console.log(`${val}st`)
} else if( ordinalNumbers[val] === 2) {
    console.log(`${val}nd`)
}else if( ordinalNumbers[val] === 3) {
    console.log(`${val}rd`)
} else {
    console.log(`${val}th`)
}
};

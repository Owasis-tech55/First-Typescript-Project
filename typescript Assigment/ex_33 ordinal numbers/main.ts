

let ordinalnum: Array<number> = [1,2,3,4,5,6,7,8,9];


for(let i = 0 ; i<ordinalnum.length ; i++) {
        if(ordinalnum[i] === 1) {
        console.log(`${ordinalnum[i]}st`)
} else if(ordinalnum[i] === 2){
    console.log(`${ordinalnum[i]}nd`)
} else if(ordinalnum[i] === 3){
    console.log(`${ordinalnum[i]}rd`)
} else {
    console.log(`${ordinalnum[i]}th`)
}
}



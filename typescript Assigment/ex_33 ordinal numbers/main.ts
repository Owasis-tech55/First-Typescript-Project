
let users: Array<number> = [1,2,3,4,5,6,7,8,9];


for(let i = 0 ; i<users.length ; i++) {
        if(users[i] === 1) {
        console.log(`${users[i]}st`)
} else if(users[i] === 2){
    console.log(`${users[i]}nd`)
} else if(users[i] === 3){
    console.log(`${users[i]}rd`)
} else {
    console.log(`${users[i]}th`)
}
}


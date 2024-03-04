

// function make_shirt(size:string , message:string) {
//     console.log(`Shirt size: ${size} \n ${message}`)
// }

// make_shirt("medium", "Hello world!");


function large_shirt(size:string = "large", message:string = "I love typescript") {
    console.log(`shirt size: ${size} \n ${message}!!`);
}

large_shirt();
large_shirt("medium");
large_shirt("small", "Hello world!!");
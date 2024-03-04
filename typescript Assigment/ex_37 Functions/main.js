// function make_shirt(size:string , message:string) {
//     console.log(`Shirt size: ${size} \n ${message}`)
// }
// make_shirt("medium", "Hello world!");
function large_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("shirt size: ".concat(size, " \n ").concat(message, "!!"));
}
large_shirt();
large_shirt("medium");
large_shirt("small", "Hello world!!");

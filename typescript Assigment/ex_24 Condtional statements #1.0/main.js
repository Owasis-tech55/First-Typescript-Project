//Question#1
let str = "Messi";
if (str === "Messi") {
    console.log("You guess the right player");
}
else {
    console.log("you didn't guess the right player");
}
//Question#2
if (str === "messi") {
    console.log("You guess the right player");
}
else {
    console.log("you didn't guess the right player");
}
//Question#3
let num = 55;
if (num % 5 === 0) {
    console.log(`${num}, is the multiple of 5`);
}
else {
    console.log(`${num}, not the multiple of 5`);
}
//Question#4
let num2 = 79;
if (num2 % 2 === 0) {
    console.log(`${num2}, is av even integer`);
}
else {
    console.log(`${num2}, not an even integer`);
}
//Question#5
let grades = 56;
if (num >= 80) {
    console.log("A+");
}
else if (num >= 70 && num <= 79) {
    console.log("A");
}
else if (num >= 60 && num <= 69) {
    console.log("B");
}
else if (num >= 50 && num <= 69) {
    console.log("C");
}
else if (num >= 33 && num <= 49) {
    console.log("D");
}
else {
    console.log("F");
}
//Question#6
let anything_array = [23];
if (Array.isArray(anything_array)) {
    console.log(`anything_array , is an Array`);
}
else {
    console.log(`anything_array is not an array`);
}
//Question#7
let not_array = "LALA";
if (Array.isArray(not_array)) {
    console.log(`anything_array , is an Array`);
}
else {
    console.log(`anything_array is not an array`);
}
export {};

//Question#1
var str = ("Messi");
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
var num = 55;
if (num % 5 === 0) {
    console.log("".concat(num, ", is the multiple of 5"));
}
else {
}
//Question#4
var num2 = 79;
if (num % 2 === 0) {
    console.log("".concat(num, ", is av even integer"));
}
else {
}
//Question#5
var grades = 56;
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
var anything_array = [23];
if (Array.isArray(anything_array)) {
    console.log("anything_array , is an Array");
}
else {
    console.log("anything_array is not an array");
}
//Question#7
var not_array = ("LALA");
if (Array.isArray(not_array)) {
    console.log("anything_array , is an Array");
}
else {
    console.log("anything_array is not an array");
}

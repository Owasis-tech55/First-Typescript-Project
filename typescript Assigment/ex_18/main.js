var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["K2", "Nile River", "Amazon forest", "Crist the Redemer"];
function print_places() {
    console.log(places);
}
//this function will reduce the readuntancy of console.log
print_places();
console.log(__spreadArray([], places, true).sort());
//to print the original array I will call my function
print_places();
console.log(__spreadArray([], places, true).sort().reverse());
print_places();

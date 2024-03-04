let places: Array<string> = ["K2", "Nile River", "Amazon forest", "Crist the Redemer"]
function print_places():void {
    console.log(places)
}
//this function will reduce the readuntancy of console.log
print_places();

console.log([...places].sort());
//to print the original array I will call my function
print_places();

console.log([...places].sort().reverse());

print_places();
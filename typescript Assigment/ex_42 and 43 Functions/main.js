var arr_magician = ["David Copperfield", "Dynamo", "Merlin brown"];
var i = 0;
function show_magacians(magacians) {
    for (var i_1 = 0; i_1 < arr_magician.length; i_1++) {
        console.log(arr_magician[i_1]);
    }
}
show_magacians(arr_magician);
//task # 43
function make_great(magician) {
    var great_magaicians = [];
    for (var i_2 = 0; i_2 < arr_magician.length; i_2++) {
        console.log("Great magacian ".concat(arr_magician[i_2]));
    }
}
show_magacians(arr_magician);
make_great(arr_magician);

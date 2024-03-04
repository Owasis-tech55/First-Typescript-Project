var guest_List = ["Maxwell", "Steve", "Cummins", "Starc", "Warner", "Ponting"];
//If any guest won't attend dinner, i will replace him with a new_guest, simply by his index number
var index = 4;
var new_Guest = ("Finch");
guest_List[4] = new_Guest;
guest_List.map(function (Elements) { return console.log("".concat(Elements, ", I would like to invite you at my dinner")); });

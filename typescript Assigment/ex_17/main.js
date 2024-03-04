var guest_List = ["Maxwell", "Agar", "Smith", "Watson"];
console.log("Due to a smaller dinner table, only two guest can be invited");
for (var i = 0; i < guest_List.length; i++) {
    if (i < guest_List.length - 1) {
        var removedGuest = guest_List.pop();
        console.log("Sorry,".concat(removedGuest, ", you are no longer invited at the dinner"));
    }
}
for (var _i = 0, guest_List_1 = guest_List; _i < guest_List_1.length; _i++) {
    var remainingGuest = guest_List_1[_i];
    console.log("hey ".concat(remainingGuest, ", you're still invited at dinner"));
}
guest_List.pop();
guest_List.pop();
console.log(guest_List);

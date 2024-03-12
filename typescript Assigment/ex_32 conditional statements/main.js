var currentUsers = ["Owaiskhilji", "AdeenaAsghar", "Admin", "user420", "unknownuser"];
var newUsers = ["Papakipari", "ADnanKK", "owaiskhilji", "UsEr420", "Rakesh786"];
var _loop_1 = function (newUser) {
    var lowerNewUser = newUser.toLowerCase();
    if (currentUsers.some(function (user) { return user.toLowerCase() === lowerNewUser; })) {
        console.log("".concat(newUser, " not available"));
    }
    else {
        console.log("".concat(newUser, " available"));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}

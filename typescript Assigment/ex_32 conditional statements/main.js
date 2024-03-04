var currentUsers = ["Owaiskhilji", "AdeenaAsghar", "Admin", "user420", "unknownuser"];
var newUsers = ["Owaiskhilji", "Papakipari", "ADnanKK", "user420", "Rakesh786"];
var i = 0;
for (var i_1 = 0; i_1 < currentUsers.length; i_1++)
    if (currentUsers[i_1] === newUsers[i_1]) {
        console.log("Username not avaible");
    }
    else {
        console.log("Username available");
    }

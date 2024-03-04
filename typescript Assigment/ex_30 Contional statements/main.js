var users = ["Owaiskhilji", "AdeenaAsghar", "Admin", "user420", "unknownuser"];
for (var i = 0; i < users.length; i++) {
    if (users[i] == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users[i], ", thank you for logging in again"));
    }
}

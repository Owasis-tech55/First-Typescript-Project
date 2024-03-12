let currentUsers: Array<string> = ["Owaiskhilji", "AdeenaAsghar", "Admin", "user420", "unknownuser"];
let newUsers: Array<string> = [ "UsEr420", "Papakipari", "ADnanKK", "owaiskhilji","Rakesh786"];

for (let newUser of newUsers) {
    let lowerNewUser = newUser.toLowerCase();

    if (currentUsers.some(user => user.toLowerCase() === lowerNewUser)) {
        console.log(`${newUser} not available`);
    } else {
        console.log(`${newUser} available`);
    }
}

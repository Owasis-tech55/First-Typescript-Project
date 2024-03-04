
let currentUsers: Array<string> = ["Owaiskhilji", "AdeenaAsghar", "Admin", "user420", "unknownuser"];
let newUsers: Array<string> = ["Owaiskhilji", "Papakipari", "ADnanKK", "user420", "Rakesh786"];
let i = 0;
for(let i =0; i<currentUsers.length ; i++)
if(currentUsers[i]=== newUsers[i]){
    console.log("Username not avaible")
} else {
    console.log("Username available")
}
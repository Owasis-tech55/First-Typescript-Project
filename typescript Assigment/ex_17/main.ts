
let guest_List: Array<string> = ["Maxwell", "Agar", "Smith", "Watson"];
console.log("Due to a smaller dinner table, only two guest can be invited");

for(let i=0; i<guest_List.length ;i++) {
    if(guest_List.length >2 ) {
        let removedGuest = guest_List.pop();
        console.log(`Sorry,${removedGuest}, you are no longer invited at the dinner`);
    }
}

for(let remainingGuest of guest_List) {
    console.log(`hey ${remainingGuest}, you're still invited at dinner`);
}

guest_List.pop();
guest_List.pop();

console.log(guest_List);


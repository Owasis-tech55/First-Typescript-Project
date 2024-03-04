



let guest_List: Array<string> = ["Maxwell", "Steve","Cummins", "Starc", "Finch", "Ponting"];
guest_List.map((Elements) => console.log(`Greetings, ${Elements},\n I'm inviting some new guests`));

//adding new guest in the beginning
guest_List.unshift("Lee");

//To add in the middle I can use the splice method
guest_List.splice(2,0, "David");

//And to add in end, I can use my push method
guest_List.push("Agar");

guest_List.map((Elements) => console.log(`hey ${Elements}, I would like to invite you at my dinner`));
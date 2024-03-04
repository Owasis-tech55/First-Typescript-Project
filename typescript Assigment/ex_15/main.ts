

let guest_List: Array<string> =[ "Maxwell", "Steve","Cummins", "Starc", "Warner", "Ponting"];
//If any guest won't attend dinner, i will replace him with a new_guest, simply by his index number
let index = 4;
let new_Guest: string = ("Finch");
guest_List[4] = new_Guest;

guest_List.map((Elements) => console.log(`${Elements}, I would like to invite you at my dinner`));
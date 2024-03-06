
let arr_magician: Array<string> = [ "David Copperfield", "Dynamo", "Merlin brown"];

let i = 0;
   function show_magacians(magacians:string[]):any {
    for(let i=0;i <arr_magician.length ; i++) {
     console.log(arr_magician[i])
    }
 
}

show_magacians(arr_magician);

//task # 43
function make_great(magician: string[] ):any { let great_magaicians: string[] = [];
    for(let i=0;i <arr_magician.length ; i++) {
        console.log(`Great magacian ${arr_magician[i]}`)
   }
   
}

make_great(arr_magician);

show_magacians(arr_magician);

//Method 2
let magicians: string[] = ["David Copperfield",  "Houdini", "Dynamo"];

let show_magicians = (magicians: string[]): void => {
    for(let magician of magicians) {
        console.log(magician);
    }
}

let make_great = (magicians: string[]): string[] =>
    magicians.map(magician => `${magician} the Great`);

console.log("Original Magicians:");
show_magicians(magicians);

let great_magicians: string[] = make_great([...magicians]);
console.log("Great Magicians:");
show_magicians(great_magicians);

console.log("Unchanged Magicians:");
show_magicians(magicians);

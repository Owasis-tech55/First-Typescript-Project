
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

show_magacians(arr_magician);
make_great(arr_magician);
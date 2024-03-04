

let store_car = (manufacturer:string , model:string , ...features:{[key:string]:any}[]): 
{[key:string]:any}=>{
    return {manufacturer, model,features};
}
 
 const carDetails = store_car("ferrari", "Laferrari",{"color":"blue"}, {"speed": "350km/h"})
console.log(carDetails);
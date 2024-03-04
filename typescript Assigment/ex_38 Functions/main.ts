

function describe_city(city:string , country:string = "England") {
    console.log(`${city}, is in ${country}`);
} 

describe_city("london");
describe_city("Manchester");
describe_city("Karachi", "Pakistan");
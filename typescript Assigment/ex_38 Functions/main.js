function describe_city(city, country) {
    if (country === void 0) { country = "England"; }
    console.log("".concat(city, ", is in ").concat(country));
}
describe_city("london");
describe_city("Manchester");
describe_city("Karachi", "Pakistan");

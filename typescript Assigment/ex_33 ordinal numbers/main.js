var ordinalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var val = 0; val < ordinalNumbers.length; val++) {
    if (ordinalNumbers[val] === 1) {
        console.log("".concat(val, "st"));
    }
    else if (ordinalNumbers[val] === 2) {
        console.log("".concat(val, "nd"));
    }
    else if (ordinalNumbers[val] === 3) {
        console.log("".concat(val, "rd"));
    }
    else {
        console.log("".concat(val, "th"));
    }
}
;

var ordinalnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinalnum.length; i++) {
    if (ordinalnum[i] === 1) {
        console.log("".concat(ordinalnum[i], "st"));
    }
    else if (ordinalnum[i] === 2) {
        console.log("".concat(ordinalnum[i], "nd"));
    }
    else if (ordinalnum[i] === 3) {
        console.log("".concat(ordinalnum[i], "rd"));
    }
    else {
        console.log("".concat(ordinalnum[i], "th"));
    }
}

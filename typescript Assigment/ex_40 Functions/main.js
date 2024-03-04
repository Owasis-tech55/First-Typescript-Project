var make_album = function (artist, album, track) {
    return "{".concat(artist, " : ").concat(album, " }");
};
var artist1 = make_album("Nazia hassan", "Disco Deewane");
var artist2 = make_album("Atif Aslam", "Meri kahani");
var artist3 = make_album("NFAK", "Shah-e-jahan");
console.log(artist1);
console.log(artist2);
console.log(artist3);

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function make_Album(artist, title, tracks) {
    return __assign({ artist: artist, title: title }, (tracks !== undefined && { tracks: tracks }));
}
var album1 = make_Album("Nazia hassan", "Disco Deewane");
var album2 = make_Album("Atif Aslam", "Meri kahani");
var album3 = make_Album("NFAK", "Shah-e-jahan", 55);
console.log(album1);
console.log(album2);
console.log(album3);

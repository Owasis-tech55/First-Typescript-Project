
let make_album = (artist: string , album: string , track?: number) => {
    return `{${artist} : ${album} }`
    
};
let artist1 = make_album("Nazia hassan", "Disco Deewane");
let artist2 = make_album("Atif Aslam", "Meri kahani");
let artist3 = make_album("NFAK", "Shah-e-jahan" );
console.log(artist1);
console.log(artist2);
console.log(artist3);
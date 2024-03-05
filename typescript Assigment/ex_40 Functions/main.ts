
type Album = {
    artist: string;
    title: string;
    tracks?: number;
}
  
  function make_Album(artist: string, title: string, tracks?: number): Album {
    return {artist,title, ...(tracks !== undefined && { tracks }),
    };
  }
  
let album1 = make_Album("Nazia hassan", "Disco Deewane");
let album2 = make_Album("Atif Aslam", "Meri kahani");
let album3 = make_Album("NFAK", "Shah-e-jahan", 55);   
console.log(album1);
console.log(album2);
console.log(album3);
  

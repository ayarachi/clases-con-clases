class Album {
  title: string;
  songs: string[];
  constructor(title: string, songs: string[]) {
    this.title = title;
    this.songs = songs;
  }
}

class Banda {
  members: string[];
  albums: any[];
  constructor(members: string[], albums: any[]) {
    this.members = members;
    this.albums = albums;
  }
}
function main() {
  const unAlbum = new Album("Album de Ely", []);
  const unaBanda = new Banda(["Eliana"], [unAlbum, unAlbum, unAlbum]);
  //console.log("solo es un comentario de prueba" unaBanda.members);
  console.log(unaBanda.albums);
}
main();

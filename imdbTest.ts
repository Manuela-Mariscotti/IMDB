import { Imdb } from "./imdb";
import { movies1 } from "./movieTest";

let imdb1 = new Imdb (movies1);

//imdb1.peliculas[0].printMovie();
//imdb1.peliculas[1].printMovie();

//let data = JSON.stringify(imdb1);
//const fs = require('fs')
//fs.writeFileSync("imdbBBDD.json",data);

//let imdb2 = new Imdb (JSON.parse(fs.readFileSync("imdbBBDD.json","utf-8")));

imdb1.escribirEnFicheroJSON("imdbBBDD.json")

console.log(imdb1.obtenerInstanciaIMDB("imdbBBDD.json"));
import { Imdb } from "./imdb";
import { movies1 } from "./movieTest";


let imdb1 = new Imdb (movies1);

//imdb1.peliculas[0].printMovie();
//imdb1.peliculas[1].printMovie();

let data = JSON.stringify(imdb1);
import fs from 'fs';
fs.writeFileSync("imdbBBDD.json",data);
import { Movie } from "./movie";
import { Imdb } from "./imdb";
import { movies1 } from "./movieTest";

const prompt = require("prompt-sync")({sigint: true});

let title = prompt ("Title? : ");
let releaseYear = prompt("Release year? : ");
let nacionality = prompt("Nacionality? : ");
let genre = prompt ("Genre? : ");

let movie5 = new Movie(title,releaseYear,nacionality,genre);
let imdb4 = new Imdb(movies1);

imdb4.peliculas.push(movie5)

imdb4.escribirEnFicheroJSON("imdbBBDD.json")

console.log(imdb4.obtenerInstanciaIMDB("imdbBBDD.json"));
import { Movie } from "./movie";

export class Imdb{
    public peliculas:Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas=peliculas;
    }

    public escribirEnFicheroJSON(nombreFichero: string):void{
        const fs = require('fs');
        let data = JSON.stringify(this.peliculas)
        return fs.writeFileSync(nombreFichero,data);
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        const fs = require('fs');
        let data = fs.readFileSync(nombreFichero);
        let imdb = new Imdb (JSON.parse(data))
        return imdb
    }
}
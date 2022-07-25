import { Professional } from "./professional";

export class Movie{
    public title:string;
    public releaseYear:number;
    public actors:string;
    public nacionality:string;
    public director:string;
    public writer:string;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor (title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }


    public getTitle():string{
        return this.title
    };

    public getReleaseYear():number{
        return this.releaseYear
    };
    
    public getNacionality():string{
        return this.nacionality
    };
    
    public getGenre():string{
        return this.genre
    }
}
import { Professional } from "./professional"

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
    public profesionals: Professional[];

    constructor (title:string,releaseYear:number,nacionality:string,genre:string,profesionals:[]){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.profesionals = []
    }


    

    public print():void{
        console.log(`Title : ${this.title}`);
        console.log(`ReleaseYear : ${this.releaseYear}`);
        console.log(`Nacionality : ${this.nacionality}`);
        console.log(`Genre : ${this.genre}`);
    
    }
   

}
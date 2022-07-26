import { Professional } from "./professional";

export class Movie{
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:Professional;
    public distributor:string;
    public genre:string;//13 atributos
  
    constructor (title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    public setActors(actors:Professional):void{
        this.actors.push(actors);
    }
    public setDirector(director:Professional):void{
        this.director = director;
    }
    public setWriter(writer:Professional):void{
        this.writer = writer;
    }
    public setLanguage(language:string):void{
        this.language = language;
    }
    public setPlatform(plataform:string):void{
        this.plataform = plataform;
    }
    public setIsMCU(isMCU:boolean):void{
        this.isMCU = isMCU;
    }
    public setMainCharacterName(mainCharacterName:string):void{
        this.mainCharacterName = mainCharacterName;
    }
    public setProducer(producer:Professional):void{
        this.producer = producer;
    }
    public setDistributor(distributor:string):void{
        this.distributor = distributor;
    }

    public print():void{
        console.log(`Title : ${this.title}`);
        console.log(`ReleaseYear : ${this.releaseYear}`);
        console.log(`Actors : ${this.actors}`);
        console.log(`Nacionality : ${this.nacionality}`);
        console.log(`Director : ${this.director}`);
        console.log(`Writer : ${this.writer}`);
        console.log(`Language : ${this.language}`);
        console.log(`Platform : ${this.plataform}`);
        console.log(`IsMCU : ${this.isMCU}`);
        console.log(`mainCharacterName : ${this.mainCharacterName}`);
        console.log(`Producer : ${this.producer}`);
        console.log(`Distributor : ${this.distributor}`);
        console.log(`Genre : ${this.genre}`);
    }
}

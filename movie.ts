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
    public genre:string;
  
    constructor (title:string,releaseYear:number,nacionality:string,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors=[];
        this.nacionality = nacionality;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
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

    public printMovie():void{
        console.log(`Title : ${this.title}`);
        console.log(`ReleaseYear : ${this.releaseYear}`);
        for (let i = 0; i < this.actors.length; i++){
            console.log(`Actors : ${this.actors[i].name}`);
        }
        console.log(`Nacionality : ${this.nacionality}`);
        console.log(`Director : ${this.director.name}`);
        console.log(`Writer : ${this.writer.name}`);
        console.log(`Language : ${this.language}`);
        console.log(`Platform : ${this.plataform}`);
        console.log(`IsMCU : ${this.isMCU}`);
        console.log(`mainCharacterName : ${this.mainCharacterName}`);
        console.log(`Producer : ${this.producer.name}`);
        console.log(`Distributor : ${this.distributor}`);
        console.log(`Genre : ${this.genre}`);
    }
}

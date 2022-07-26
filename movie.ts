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


    public getActors():string{
        return this.actors
    }
    public getDirector():string{
        return this.director
    }
    public getWriter():string{
        return this.writer
    }
    public getLanguage():string{
        return this.language
    }
    public getPlatform():string{
        return this.plataform
    }
    public getIsMCU():boolean{
        return this.isMCU
    }
    public getMainCharacterName():string{
        return this.mainCharacterName
    }
    public getProducer():string{
        return this.producer
    }
    public getDistributor():string{
        return this.distributor
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

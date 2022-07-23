export class Professional{
    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nacionality:string;
    public oscarNumber:number;
    public profession:string;

    constructor (name:string, age:number,genre:string,weight:number,height:number,hairColor:string,eyeColor:string,race:string,isRetired:boolean,nacionality:string,oscarNumber:number,profession:string){
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nacionality = nacionality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }

    public print():void{
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Genre : ${this.genre}`);
        console.log(`Weight : ${this.weight}`);
        console.log(`Height : ${this.height}`);
        console.log(`Hair color : ${this.hairColor}`);
        console.log(`Eye color: ${this.eyeColor}`);
        console.log(`Race : ${this.race}`);
        console.log(`Is retired? : ${this.isRetired}`);
        console.log(`Nacionality : ${this.nacionality}`);
        console.log(`Oscar numbers : ${this.oscarNumber}`);
        console.log(`Profession : ${this.profession}`);
    }
}
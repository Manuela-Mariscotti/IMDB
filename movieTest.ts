import { Movie } from "./movie";

let miActors = new Movie("Rec",2007,"española","terror")
    console.log(miActors.getActors)

let rec = new Movie ("Rec",2007,"española","terror",);

let interestellar = new Movie ("Interestellar",2014,"britanico-estadounidense","ciencia ficcion");

let rogueOne = new Movie ("Rogue One",2016,"estadounidense","ciencia ficcion");

let unTriomphe = new Movie ("El triunfo",2020,"francesa","comedia");

rec.print();
interestellar.print();
rogueOne.print();
unTriomphe.print();

import { Movie } from "./movie";
import { Professional } from "./professional";

//let actores1 = [AlPacino,RoberDeNiro]

let ElPadrino2 = new Movie ("El Padrino. Parte II",1974,"american","drama-crimen")

let miActors = new Movie("Rec",2007,"española","terror")

let rec = new Movie ("Rec",2007,"española","terror");

let interestellar = new Movie ("Interestellar",2014,"britanico-estadounidense","ciencia ficcion");

let rogueOne = new Movie ("Rogue One",2016,"estadounidense","ciencia ficcion");

let unTriomphe = new Movie ("El triunfo",2020,"francesa","comedia");

ElPadrino2.setActors(AlPacino);
ElPadrino2.setActors(RoberDeNiro);
ElPadrino2.setDirector(FrancisFordCoppola);
ElPadrino2.setWriter(MarioPuzo);
ElPadrino2.setLanguage("english");
ElPadrino2.setIsMCU(false);
ElPadrino2.setMainCharacterName("Michael Corleone");
ElPadrino2.setProducer(FrancisFordCoppola);
ElPadrino2.setPlatform("HBO");
ElPadrino2.setDistributor("Paramount Pictures");

ElPadrino2.print();



import { Movie } from "./movie";
import { Professional } from "./professional";

//////////////////////PROFESSIONAL
let AlPacino = new Professional ("Al Pacino",82,"male",85,1.70,"black","brown","white",false,"american",1,"actor, director, productor, guionista");

let RoberDeNiro = new Professional ("Rober De Niro",78,"male",90,1.72,"grey","brown","white",false,"american",2,"actor, director, productor, guionista ");

let FrancisFordCoppola = new Professional ("Francis Ford Coppola",83,"male",85,1.70,"grey","brown","white",false,"american",6,"director, guionista, productor");

let MarioPuzo = new Professional("Mario Puzo",78,"male",90,1.80,"grey","brown","white",true,"american",6,"escritor")

let MatthewMcConaughey = new Professional ("Matthew McConaughey",52,"male",80,1.82,"blonde","lightblue","white",false,"american",0,"actor");

let AnneHathaway = new Professional ("Anne Hathaway",39,"female",56,1.74,"brown","brown","white",false,"american",0,"actress");

let ChristopherNolan = new Professional ("Christopher Nolan",51,"male",90,1.75,"grey","blue","white",false,"british",0,"director, productor, guionista");

/////////////////////MOVIES
let ElPadrino2 = new Movie ("El Padrino. Parte II",1974,"american","drama-crimen")

let Interestellar = new Movie ("Interestellar",2014,"britanico-estadounidense","ciencia ficcion");

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
//ElPadrino2.printMovie();

Interestellar.setActors(MatthewMcConaughey);
Interestellar.setActors(AnneHathaway);
Interestellar.setDirector(ChristopherNolan);
Interestellar.setWriter(RoberDeNiro);
Interestellar.setLanguage("english");
Interestellar.setIsMCU(false);
Interestellar.setProducer(AlPacino);
Interestellar.setPlatform("Netflix");
Interestellar.setDistributor("Warner Bros.");
//Interestellar.printMovie();



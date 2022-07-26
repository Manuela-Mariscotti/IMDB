import { Professional } from "./professional";

export let AlPacino = new Professional ("Al Pacino",82,"male",85,1.70,"black","brown","white",false,"american",1,"actor, director, productor, guionista");

export let RoberDeNiro = new Professional ("Rober De Niro",78,"male",90,1.72,"grey","brown","white",false,"american",2,"actor, director, productor, guionista ");

let LeoDicaprio = new Professional ("Leonardo DiCaprio",47,"male",89,1.83,"blond","cyan","white",false,"american",1,"actor,productor de cine");

let QuentinTarantino = new Professional ("Quentin Tarantino",59,"male",85,1.82,"brown","brown","white",false,"american",1,"director, productor, guinista, actor");

export let FrancisFordCoppola = new Professional ("Francis Ford Coppola",83,"male",85,1.70,"grey","brown","white",false,"american",6,"director, guionista, productor");

export let MarioPuzo = new Professional("Mario Puzo",78,"male",90,1.80,"grey","brown","white",true,"american",6,"escritor")

AlPacino.print();

RoberDeNiro.print();

LeoDicaprio.print();

QuentinTarantino.print();

FrancisFordCoppola.print();
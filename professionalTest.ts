import { Professional } from "./professional";

export let AlPacino = new Professional ("Al Pacino",82,"male",85,1.70,"black","brown","white",false,"american",1,"actor, director, productor, guionista");

export let RoberDeNiro = new Professional ("Rober De Niro",78,"male",90,1.72,"grey","brown","white",false,"american",2,"actor, director, productor, guionista ");

let LeoDicaprio = new Professional ("Leonardo DiCaprio",47,"male",89,1.83,"blond","cyan","white",false,"american",1,"actor,productor de cine");

let QuentinTarantino = new Professional ("Quentin Tarantino",59,"male",85,1.82,"brown","brown","white",false,"american",1,"director, productor, guinista, actor");

AlPacino.printProfessional();

RoberDeNiro.printProfessional();

LeoDicaprio.printProfessional();

QuentinTarantino.printProfessional();
"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nacionality, oscarNumber, profession) {
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
    Professional.prototype.printProfessional = function () {
        console.log("Name : ".concat(this.name));
        console.log("Age : ".concat(this.age));
        console.log("Genre : ".concat(this.genre));
        console.log("Weight : ".concat(this.weight));
        console.log("Height : ".concat(this.height));
        console.log("Hair color : ".concat(this.hairColor));
        console.log("Eye color: ".concat(this.eyeColor));
        console.log("Race : ".concat(this.race));
        console.log("Is retired? : ".concat(this.isRetired));
        console.log("Nacionality : ".concat(this.nacionality));
        console.log("Oscar numbers : ".concat(this.oscarNumber));
        console.log("Profession : ".concat(this.profession));
    };
    return Professional;
}());
exports.Professional = Professional;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandLineInterface_1 = require("./CommandLineInterface");
const Zoo_1 = require("../Zoo");
function createAddNewAnimalCLI(zoo, parent) {
    return new CommandLineInterface_1.CommandLineInterface([
        "Add Animal Module:",
        "Type values for all these properties, separated by a comma: id, name, age, species, habitatId (optional). Ex.: 1, bobo, 2, monkey, 1"
    ], [], (input) => {
        console.log("New animal added!");
        // TODO: Add new Animal
        zoo.addNewAnimal(new Zoo_1.Animal());
        parent.display();
    });
}
exports.default = createAddNewAnimalCLI;

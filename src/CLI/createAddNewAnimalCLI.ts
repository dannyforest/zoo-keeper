import {CommandLineInterface} from "./CommandLineInterface";
import {Animal, Zoo} from "../Zoo";

export default function createAddNewAnimalCLI(zoo: Zoo, parent: CommandLineInterface): CommandLineInterface {
    return new CommandLineInterface(
        [
            "Add Animal Module:",
            "Type values for all these properties, separated by a comma: id, name, age, species, habitatId (optional). Ex.: 1, bobo, 2, monkey, 1"
        ],
        [],
        (input: string) => {
            console.log("New animal added!");

            // TODO: Add new Animal
            zoo.addNewAnimal(new Animal());


            parent.display();
        }
    );
}
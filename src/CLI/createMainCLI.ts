import {CommandLineInterface} from "./CommandLineInterface";
import createManageAnimalCLI from "./createManageAnimalCLI";
import {Zoo} from "../Zoo";

export default function createMainCLI(zoo: Zoo): CommandLineInterface {
    const mainCLI = new CommandLineInterface(
        [
            "Welcome to the Zoo Management System!",
            "1. Manage Animals\n2. Manage Habitats\n3. Manage Zookeepers\n4. View Zoo Report\n5. Exit"
        ],
        [
            {
                input: "1",
                method: () => {
                    manageAnimalCLI.display();
                },
            },
            {
                input: "5",
                method: () => {
                    console.log("Exiting...");
                }
            }
        ],
        null
    );

    const manageAnimalCLI = createManageAnimalCLI(zoo, mainCLI);

    return mainCLI;
}
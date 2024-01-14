import {CommandLineInterface} from "./CommandLineInterface";
import createAddNewAnimalCLI from "./createAddNewAnimalCLI";
import {Zoo} from "../Zoo";

export default function createManageAnimalCLI(zoo: Zoo, parent: CommandLineInterface): CommandLineInterface {
    const cli = new CommandLineInterface(
        [
            "Manage Animals Module:",
            "1. Add New Animal\n2. Remove Animal\n3. View All Animals\n4. Return to Main Menu"
        ],
        [
            {
                input: "1",
                method: () => {
                    addNewAnimalCLI.display();
                }
            },
            {
                input: "4",
                method: () => {
                    parent.display();
                }
            },
        ],
        null
    );

    const addNewAnimalCLI = createAddNewAnimalCLI(zoo, cli);

    return cli;
}
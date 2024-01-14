"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommandLineInterface_1 = require("./CommandLineInterface");
const createManageAnimalCLI_1 = __importDefault(require("./createManageAnimalCLI"));
function createMainCLI(zoo) {
    const mainCLI = new CommandLineInterface_1.CommandLineInterface([
        "Welcome to the Zoo Management System!",
        "1. Manage Animals\n2. Manage Habitats\n3. Manage Zookeepers\n4. View Zoo Report\n5. Exit"
    ], [
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
    ], null);
    const manageAnimalCLI = (0, createManageAnimalCLI_1.default)(zoo, mainCLI);
    return mainCLI;
}
exports.default = createMainCLI;

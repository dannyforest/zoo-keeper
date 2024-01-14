"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommandLineInterface_1 = require("./CommandLineInterface");
const createAddNewAnimalCLI_1 = __importDefault(require("./createAddNewAnimalCLI"));
function createManageAnimalCLI(zoo, parent) {
    const cli = new CommandLineInterface_1.CommandLineInterface([
        "Manage Animals Module:",
        "1. Add New Animal\n2. Remove Animal\n3. View All Animals\n4. Return to Main Menu"
    ], [
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
    ], null);
    const addNewAnimalCLI = (0, createAddNewAnimalCLI_1.default)(zoo, cli);
    return cli;
}
exports.default = createManageAnimalCLI;

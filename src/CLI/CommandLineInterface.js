"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLineInterface = void 0;
const readline = __importStar(require("readline"));
class CommandLineInterface {
    constructor(lines, options, inputCallback) {
        this.lines = lines;
        this.options = options;
        this.inputCallback = inputCallback;
    }
    display() {
        this.printLines();
        this.printOptions();
        this.processInput();
    }
    printLines() {
        console.log("\n");
        this.lines.forEach((line) => console.log(line));
    }
    printOptions() {
        if (this.options.length == 0)
            return;
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Select an option: ', (choice) => {
            rl.close();
            const option = this.options.find((option) => option.input == choice);
            if (!option) {
                console.log("Invalid choice, please try again.");
                this.display();
                return;
            }
            option.method(rl);
        });
    }
    processInput() {
        if (!this.inputCallback)
            return;
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Type here: ', (input) => {
            rl.close();
            if (this.inputCallback)
                this.inputCallback(input);
        });
    }
}
exports.CommandLineInterface = CommandLineInterface;

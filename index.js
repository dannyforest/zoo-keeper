"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createMainCLI_1 = __importDefault(require("./src/CLI/createMainCLI"));
const Zoo_1 = require("./src/Zoo");
const zoo = new Zoo_1.Zoo();
(0, createMainCLI_1.default)(zoo).display();

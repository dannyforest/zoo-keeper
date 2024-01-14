import createMainCLI from "./src/CLI/createMainCLI";
import {Zoo} from "./src/Zoo";

const zoo = new Zoo();

createMainCLI(zoo).display();
import * as readline from 'readline';

interface CLIOption {
    input: string;
    method: Function;
}

export class CommandLineInterface {
    private lines: string[];
    private options: CLIOption[];
    private inputCallback: Function | null | undefined;

    constructor(lines: string[], options: CLIOption[], inputCallback: Function | null | undefined) {
        this.lines = lines;
        this.options = options;
        this.inputCallback = inputCallback;
    }

    public display(): void {
        this.printLines();
        this.printOptions();
        this.processInput();
    }

    private printLines(): void {
        console.log("\n");
        this.lines.forEach((line) => console.log(line));
    }

    private printOptions(): void {
        if (this.options.length == 0)
            return;

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Select an option: ', (choice: string) => {
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

    private processInput(): void {
        if (!this.inputCallback)
            return;

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Type here: ', (input: string) => {
            rl.close();

            if (this.inputCallback)
                this.inputCallback(input);
        });
    }
}
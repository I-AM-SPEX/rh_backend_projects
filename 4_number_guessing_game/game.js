import PromptSync from "prompt-sync";
export class NumberGuessingGame {
    constructor () {
        this.number;
        this.chances;
        this.difficulty;
    }

    welcome() {
        console.log('Welcome to the Number Guessing Game!');
        console.log('I\'m thinking of a number between 1 and 100.');
        console.log('The Number of chances you get is based on the difficulty selected');
    }

    async selectDifficulty() {
        try {
            console.log('Please select the difficulty level');
            console.log('1. Easy (10 chances)');
            console.log('2. Medium (5 chances)');
            console.log('3. Hard (3 chances)');
            const prompt = new PromptSync();
            const choice =  prompt("Enter you choice:  ");
            console.log(choice)
        } catch (error) {
            console.log(error)
        }
      
    }

    setChances(difficulty) {
        switch(difficulty) {
            case 1:
                this.difficulty = 10;
                break;
            case 2:
                this.difficulty = 5;
                break;
            case 3:
                this.difficulty = 3;
                break;
        }
    }

}
import PromptSync from "prompt-sync";
export class NumberGuessingGame {
    constructor() {
        this.randomNumber;
        this.chances;
        this.difficulty;
        this.attempts = 0;
    }

    welcome() {
        console.log('Welcome to the Number Guessing Game!');
        console.log('I\'m thinking of a number between 1 and 100.');
        console.log('The Number of chances you get is based on the difficulty selected');
    }

    selectDifficulty() {
        try {
            console.log('Please select the difficulty level');
            console.log('1. Easy (10 chances)');
            console.log('2. Medium (5 chances)');
            console.log('3. Hard (3 chances)');
            const prompt = new PromptSync();
            const choice = Number(prompt("Enter you choice: "));
            this.setChances(choice);
            console.log(`Great! You have selected the ${this.difficulty} difficulty level.`);
            this.startGame();
        } catch (error) {
            console.log(error)
        }

    }

    setChances(difficulty) {
        switch (difficulty) {
            case 1:
                this.difficulty = 'Easy';
                this.chances = 10;
                break;
            case 2:
                this.difficulty = 'Medium';
                this.chances = 5;
                break;
            case 3:
                this.difficulty = 'Hard';
                this.chances = 3;
                break;
            default:
                console.log('Invlaid option selected');
                console.log('Game Quited')
                process.exit(0);
                

        }
    }
    startGame() {

        console.log('Lets start the game');
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log('the random number',this.randomNumber);
        this.guessNumber(this.chances)
    }
    guessNumber(chances) {
        let won = false;
        const prompt = new PromptSync();
        while(this.attempts < chances) {
            console.log(`Current Attempts: ${this.attempts}`);
            const guess = Number(prompt("Enter your guess: "))
            if(guess ===  this.randomNumber) {
                won = true
                break;
            }else {
                console.log(`Incorrect! The number is ${(this.randomNumber > guess)? `greater than ${guess}`:`less than ${guess}` }`);
            }

            this.increaseAttempt();
            
        }
        if(won) {
            const finalAttempts = this.attempts;
            this.resetAttempts();
        }else {
            this.resetAttempts();
            console.log('You lost the correct number is', this.randomNumber);
            console.log('Play again');
            console.log('1. Yes');
            console.log('2. No');
            const response = Number(prompt("Enter choice: "));
            if(response == 1) {
                this.selectDifficulty();
            }else {
                return;
            }
        }

    }

    increaseAttempt() {
        this.attempts = this.attempts + 1;
    }

    wonGame() {

    }

    resetAttempts() {
        this.attempts = 0;
    }



}
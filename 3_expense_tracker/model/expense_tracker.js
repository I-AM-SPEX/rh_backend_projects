import  fs from 'fs'

const path = 'expenses.json'

export class ExpenseTracker {
    constructor() {

    }

   
    add(expense) {
        if(fs.existsSync(path)) {
            console.log('the file exists');
        }else {
            console.log('the file does not exists')
        }
    }

    update() {

    }

    delete() {

    }

    list() {

    }

    summary() {

    }
}
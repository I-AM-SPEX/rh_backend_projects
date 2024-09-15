import fs from 'fs'
import { escape } from 'querystring';

const path = 'expenses.json'

export class ExpenseTracker {
    constructor() {

    }


    add(expense) {
        try {
            if (fs.existsSync(path)) {
                const data = fs.readFileSync(path);
                const expenses = JSON.parse(data);
                console.log(expenses)
                expense.setId(expenses.expenses.length + 1);
                expenses.expenses.push(expense);
                console.log(expenses);

                const json_string = JSON.stringify(expenses);
                fs.writeFileSync(path, json_string);




            } else {
                const data = { expenses: [] };
                expense.setId(data.expenses.length + 1);
                data.expenses.push(expense);
                const json_string = JSON.stringify(data);
                fs.writeFileSync(path, json_string);

            }
        } catch (error) {
            console.error(error)
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
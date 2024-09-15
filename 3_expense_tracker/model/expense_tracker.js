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
                expense.setId(expenses.expenses.length + 1);
                expenses.expenses.push(expense);
                const json_string = JSON.stringify(expenses);
                fs.writeFileSync(path, json_string);
                console.log(`Expense added Succesfully (ID: ${expense.getId()})`);



            } else {
                const data = { expenses: [] };
                expense.setId(data.expenses.length + 1);
                data.expenses.push(expense);
                const json_string = JSON.stringify(data);
                fs.writeFileSync(path, json_string);
                console.log(`Expense added Succesfully (ID: ${expense.getId()})`);


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
        try {
            if (fs.existsSync(path)) {
                const data = fs.readFileSync(path);
                const expenses = JSON.parse(data);
                const expenses_list = expenses.expenses;
                console.log('ID     Date          Description     Amount     Category')
                for (const expense of expenses_list) {
                    console.log(`${expense.id}      ${expense.createdAt}     ${expense.description}            ${expense.amount}       ${expense.category || 'default'}`)
                }
            } else {
                console.log('No expenses found,Add an expense');
               

            }
        } catch (error) {
            console.error(error)
        }
    }

    summary() {
        try {
            if (fs.existsSync(path)) {
                let sum = 0;
                const data = fs.readFileSync(path);
                const expenses = JSON.parse(data);
                const expenses_list = expenses.expenses;
                for (const expense of expenses_list) {
                    const amount = expense.amount.split('$')[1];
                    sum += Number(amount);
                }
                console.log(`Total expenses: $${sum}`);
            } else {
                console.log('No expenses found,Add an expense');
            }
        } catch (error) {
            console.error(error);
        }
    }

    summaryByMonth(month) {
        try {
            if (fs.existsSync(path)) {
                let sum = 0;
                const data = fs.readFileSync(path);
                const expenses = JSON.parse(data);
                const expenses_list = expenses.expenses;
                for (const expense of expenses_list) {
                    if (expense.createdAt.split('/')[0] == month) {
                        const amount = expense.amount.split('$')[1];
                        sum += Number(amount);
                    }

                }
                console.log(`Total expenses: $${sum}`);
            } else {
                console.log('No expenses found,Add an expense');
            }
        } catch (error) {
            console.error(error);
        }
    }
}
import { program } from 'commander'
import { ExpenseTracker } from './model/expense_tracker.js';
import { Expense } from './model/expense.js';

program
    .command('add')
    .requiredOption('--description <description>', 'expense description')
    .requiredOption('--amount <amount>', 'expense amount')
    .action(options => {
        const description = String(options.description)
        const amount = Number(options.amount)
        const expense = new Expense(description, amount);
        const app = new ExpenseTracker();
        app.add(expense);

    })
program.
    command('list')
    .action(() => {
        const app = new ExpenseTracker();
        app.list();
    });
program
    .command('summary')
    .option('--month <month>', 'summary by month')
    .action((options) => {
        if (options.month) {
            const app = new ExpenseTracker();
            app.summaryByMonth(Number(options.month));
        } else {
            const app = new ExpenseTracker();
            app.summary();
        }


    });
program.command('delete');



program.parse(process.argv);

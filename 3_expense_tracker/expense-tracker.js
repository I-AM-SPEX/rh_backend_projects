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
    .option('--category <category>', 'filter by category')
    .action((options) => {
        if (options.category) {
            const app = new ExpenseTracker();
            app.filterByCategory(options.category);
        } else {
            const app = new ExpenseTracker();
            app.list();
        }
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
program
    .command('delete')
    .requiredOption('--id <id>', 'Delete by ID')
    .action(options => {
        if (options.id) {
            const app = new ExpenseTracker();
            app.delete(options.id);
        } else {
            console.log('Provide Expense ID');
        }
    });

program
    .command('category')
    .requiredOption('--type <type>', 'Add category')
    .requiredOption('--id <id>', 'get expense by id')
    .action(options => {
        if (options.type && options.id) {

            const app = new ExpenseTracker();
            app.addCategory(options.id, options.type);
        } else {
            console.log("Provide Requeired Aguments");
        }
    })

program
    .command('export')
    .option('--type <type>')
    .action((options) => {
        if(options.type.toString() === 'csv') {
            const app = new ExpenseTracker();
            app.exportAsCsv();
        }
    })



program.parse(process.argv);

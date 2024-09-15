import {program} from 'commander'

program
.command('add')
.requiredOption('--description <description>','expense description')
.requiredOption('--amount <amount>', 'expense amount')
.action(options => {
    const description = options.description
    const amount = options.amount
    console.log(description,amount)
})
program.command('list','list expenses');
program.command('summary','summary of expenses','--month');
program.command('delete');



program.parse(process.argv);

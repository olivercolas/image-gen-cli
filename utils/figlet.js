const figlet = require('figlet')
const chalk = require('chalk')

module.exports = {
    banner: (text) => {
        figlet(text, (err, data) => {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(chalk.green.bold(data))
            console.log('')
        })
    }
}
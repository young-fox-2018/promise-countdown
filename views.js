const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  //ubah format 0:0
  console.log(chalk.cyan(figlet.textSync(seconds)))

};

module.exports = { displayCountdown };

const clear = require('clear');
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let menit = Math.floor(seconds / 60)
  let detik = seconds % 60
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(`${menit} : ${detik}`)));
};

module.exports = { displayCountdown };

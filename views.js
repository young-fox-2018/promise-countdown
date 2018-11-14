const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if (seconds < 10) {
    console.log(chalk.cyan(figlet.textSync(`00:0${seconds}`)));
  }
  else if (seconds < 60) {
    console.log(chalk.cyan(figlet.textSync(`00:${seconds}`)));
  }
  else if (seconds >= 60) {
    let menit = Math.floor(seconds/60)
    let detik = seconds%60
    if (detik < 10) {
      console.log(chalk.cyan(figlet.textSync(`0${menit}:0${detik}`)));
    } else {
      console.log(chalk.cyan(figlet.textSync(`0${menit}:${detik}`)));
    }
  }
};

module.exports = { displayCountdown };

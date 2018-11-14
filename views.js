const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear()
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if (seconds >= 0) {
    let min = Math.floor(seconds / 60);
    let sec = seconds - (min) * 60;
    if (min < 10) {
      if (sec >= 10) {
        let minutes = `0${min}:${sec}`;
        console.log(chalk.cyan(figlet.textSync(minutes)))
      } else {
        let minutes = `0${min}:0${sec}`;
        console.log(chalk.cyan(figlet.textSync(minutes)))
      }
    } else {
      if (sec >= 10) {
        let minutes = `${min}:${sec}`;
        console.log(chalk.cyan(figlet.textSync(minutes)))
      } else {
        let minutes = `${min}:0${sec}`;
        console.log(chalk.cyan(figlet.textSync(minutes)))
      }
    }
  }
};

module.exports = { displayCountdown };

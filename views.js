const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let min = Math.floor(seconds / 60)
  let sec = seconds % 60
  if (min < 10) {
    min = '0' + min
  }
  if (sec < 10) {
    sec = '0' + sec
  }
  console.log(chalk.yellow(figlet.textSync(`${min}:${sec}`)));
};

module.exports = { displayCountdown };
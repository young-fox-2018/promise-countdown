const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minute = Math.floor(seconds / 60);
  seconds = seconds % 60;

  console.log(chalk.yellow(figlet.textSync(`${minute}:${seconds}`)));
};

module.exports = { displayCountdown };

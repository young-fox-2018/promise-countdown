const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
 
  if (m < 10) {
    m = `0${m}`
  } 
  if (s < 10) {
    s = `0${s}`
  }
  
  console.log(chalk.cyan(figlet.textSync(`${m}:${s}`)));
};

module.exports = { displayCountdown };

const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (seconds) => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...

  let minutes = String(Math.floor(seconds/60))
  seconds = String(seconds%60)

  if(minutes < 10){
    minutes = "0" + minutes
  }
  if(seconds < 10){
    seconds = "0" + seconds
  }
  console.log(chalk.cyan(figlet.textSync(`${minutes} : ${seconds}`)));
};

module.exports = { displayCountdown };

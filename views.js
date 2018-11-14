const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let minutes = Math.floor(seconds/60);
  let sec = seconds%60;
  
  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  if(sec < 10) {
    sec = "0" + sec;
  } 
  console.log(chalk.cyan(figlet.textSync(`${minutes} : ${sec}`)));
};

module.exports = { displayCountdown };

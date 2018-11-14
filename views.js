const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  const convertTime = seconds => {
    let min = Math.floor(seconds/60)
    let sec = Math.floor(seconds%60)
    
    if(min < 10) {
      var minDisplay = `0${min}`
    } else {
      minDisplay = min
    }
    
    if(sec < 10) {
      var secDisplay = `0${sec}`
    } else {
      secDisplay = sec
    }
    return (`${minDisplay} : ${secDisplay}`)
  }
  console.log(chalk.red(figlet.textSync(convertTime(seconds))));
};

module.exports = { displayCountdown };

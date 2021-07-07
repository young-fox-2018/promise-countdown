const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var mm = Math.floor(seconds/60);
  var dd = seconds % 60;
    if (mm < 10) {
      mm = '0'+mm
    }
    if (dd < 10) {
      dd = '0'+dd
    }
  console.log(chalk.cyan(figlet.textSync(`${mm}:${dd}`)));
};

module.exports = { displayCountdown };

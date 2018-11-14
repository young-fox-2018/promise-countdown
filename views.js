const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if(seconds >= 0){
    let menit = Math.floor(seconds/60)
    let detik = seconds - menit*60
    let counter = ""
    if(menit < 10 && detik < 10){
      counter = `0${menit}:0${detik}`
    }else if(menit < 10 && detik >= 10){
      counter = `0${menit}:${detik}`
    }else if(menit > 10 && detik < 10){
      counter = `${menit}:0${detik}`
    }else{
      counter = `${menit}:${detik}`
    }
    console.log(chalk.red(figlet.textSync(counter)))
    seconds--
  } 
}

module.exports = { displayCountdown };

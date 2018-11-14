const { timer } = require("./controllers");
const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(seconds)
  .then(()=>{
    console.log(chalk.cyan(figlet.textSync("Time's Up")));
  })
};

main();

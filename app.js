const { timer } = require("./controllers/controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  // console.log(typeof timer)
  timer(seconds)
};

main();

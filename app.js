const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(seconds)
    .then(() => {
      process.exit()
    })
};

main();

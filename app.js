const { timer } = require("./controllers");

const main = (display) => {
  const seconds = parseInt(process.argv[2]) || 10;

  timer(seconds)
    .catch(() => {
      
    })
};

main();

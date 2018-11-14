const { timer } = require("./controllers");
const Display = require('./views')

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  timer(seconds)
    .then(()=> {
      console.log()
    })
    .catch((err)=>{
      console.log(err)
    })
    
};

main();

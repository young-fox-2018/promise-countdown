const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    
    let myInterval = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        reject(0)
        clearInterval(myInterval);
      } else{
        let menit = Math.floor(secondsLeft/60)
        let menit2 = ''
        let detik = ''
        
        if(menit < 9) {
          menit2 = `0${Math.floor(secondsLeft/60)}`
        } else {
          menit2 = menit
        }
        if(detik > 9 ){
          detik = ` 0${secondsLeft - (menit * 60)}`
        }else {
          detik = secondsLeft - (menit * 60)
        }
        displayCountdown(`${menit2}:${detik}`);
        resolve();
      }
    }, 1000);
  });

module.exports = {
  timer
};

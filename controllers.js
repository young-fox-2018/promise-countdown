const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    seconds += 2
    const then = now + seconds * 1000;

    let myInterval = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft <= 0) {
        clearInterval(myInterval);
        reject();
      } else {
        let detik = secondsLeft % 60
        let menit = Math.floor(secondsLeft / 60)

        if (menit < 10) {
          menit = '0'+menit.toString()
        }

        if (detik < 10) {
          detik = '0'+detik.toString()
        }

        displayCountdown(`${menit}:${detik}`);
        // displayCountdown(`test`);
      }
    }, 1000);
  });

module.exports = {
  timer
};

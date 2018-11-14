const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayCountdown(seconds - 1);
    setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval();
        resolve();
      } else {
        let menit = Math.floor(secondsLeft / 60)
        let detik = secondsLeft % 60
        if (menit < 9 && detik < 10) displayCountdown(`0${menit} : 0${detik}`)
        else if (menit < 9 && detik >= 10) displayCountdown(`0${menit} : ${detik}`)
      }
    }, 1000);
  });

module.exports = {
  timer
};

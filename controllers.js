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
        if (secondsLeft > 60) {
          if (secondsLeft / 60 > 10) {
            displayCountdown(`${Math.floor(secondsLeft/60)}: ${secondsLeft % 60}`)
            if (secondsLeft % 60 <= 10) {
                displayCountdown(`${Math.floor(secondsLeft/60)}: 0${secondsLeft % 60}`)
            } else {
                 displayCountdown(`${Math.floor(secondsLeft/60)}: ${secondsLeft % 60}`)
            }
          } else {
            if (secondsLeft % 60 <= 10) {
                displayCountdown(`0${Math.floor(secondsLeft/60)}: 0${secondsLeft % 60}`)
            } else {
                displayCountdown(`0${Math.floor(secondsLeft/60)}: ${secondsLeft % 60}`)
            }
          }
      } else {
          if (secondsLeft >= 10) {
             displayCountdown(`00:${secondsLeft}`)
          } else {
              displayCountdown(`00:0${secondsLeft}`)
          }
      }
      }
    }, 1000);
  });

module.exports = {
  timer
};

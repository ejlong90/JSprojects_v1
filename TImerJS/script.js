let seconds = 60;
let minutes = 1;

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function timer() {
  while (minutes > 0) {
    // console.log(minutes); // html element -- user will set the minutes
    while (seconds > 0) {
      // console.log(seconds); // html element -- user will set the seconds
      document.getElementById("timer").innerHTML = minutes + ":" + seconds;
      await delay(1000);
      seconds--;
    }
    seconds = 60;
    minutes--;
  }
}

timer();

// session length and break length

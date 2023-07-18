let seconds = 60;
let minutes = 1;

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function timer(status) {
  console.log(status);
  while (minutes > 0) {
    console.log(minutes);
    var myElement = document.getElementById("minutes");
    myElement.innerHTML = minutes - 1; // html element -- user will set the minutes
    while (seconds >= 0) {
      console.log(seconds); // html element -- user will set the seconds
      // document.getElementById("timer").value = minutes + ":" + seconds;
      var myElement = document.getElementById("seconds");
      myElement.innerHTML = seconds;
      await delay(1000);
      seconds--;
    }
    seconds = 60;
    minutes--;
  }
  alert("Take a break!");
}

// timer();

// session length and break length

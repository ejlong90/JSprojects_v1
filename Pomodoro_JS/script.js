// variables

let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 60;
let breaktime = 10;

let seconds = "00";

// display
window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

// start timer
// testing

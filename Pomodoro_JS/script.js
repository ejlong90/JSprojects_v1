// variables

let workTitle = document.getElementById("focus");
let breakTitle = document.getElementById("break");

let workTime = 1;
let breakTime = 1;

let seconds = "00";

// display
window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

// start timer
function start() {
  // change button 
  document.getElementById('start').style.display = "none";
  document.getElementById('pause').style.display = "block";

  // change the time
  seconds = 3;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  // countdown 
  
  let timerFunction = () => {
    // change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    

    // start
    seconds = seconds - 1;

    if(seconds == 0) {
      workMinutes = workMinutes - 1;
        if(workMinutes == -1){
          if(breakCount % 2 == 0) 
            // start break
            workMinutes = breakMinutes;
            breakCount++

            // change the panel
            workTitle.classList.remove('active');
            breakTitle.classList.add('active');

            // displaying alert window for going back to work and taking a break
            if (seconds == 0) {
              window.alert("Back to work!");
            }

        }else {
          // continue work
          workMinutes = workTime;
          breakCount++

          breakTitle.classList.remove('active');
          workTitle.classList.add('active');

         
        }
      seconds = 3;


    }

  }

  // start countdown
  setInterval(timerFunction, 1000); // 1000 = 1s;
}


/* Want to have an alert window that pops up when the Focus timer hits zero. And when Break timer hits zero. */
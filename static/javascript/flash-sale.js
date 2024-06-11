// Initial time values
var initialHours = 1;
var initialMinutes = 0;
var initialSeconds = 0;

// Function to update the time left
function updateTimeLeft() {
    var hoursElement = document.getElementById("hours");
    var minutesElement = document.getElementById("minutes");
    var secondsElement = document.getElementById("seconds");

    var hours = parseInt(hoursElement.textContent);
    var minutes = parseInt(minutesElement.textContent);
    var seconds = parseInt(secondsElement.textContent);

    // Decrement seconds
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      // Decrement minutes if seconds reach 0
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        // Decrement hours if minutes reach 0
        hours--;
        if (hours < 0) {
          // Reset to initial time when the countdown finishes
          hours = initialHours;
          minutes = initialMinutes;
          seconds = initialSeconds;
        }
      }
    }

    // Update displayed time
    hoursElement.textContent = hours < 10 ? "0" + hours : hours;
    minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Set initial time in the HTML elements
function setInitialTime() {
    document.getElementById("hours").textContent = initialHours < 10 ? "0" + initialHours : initialHours;
    document.getElementById("minutes").textContent = initialMinutes < 10 ? "0" + initialMinutes : initialMinutes;
    document.getElementById("seconds").textContent = initialSeconds < 10 ? "0" + initialSeconds : initialSeconds;
}

// Set the initial time and start the countdown
setInitialTime();
updateTimeLeft();
setInterval(updateTimeLeft, 1000);

const countDownDate = new Date();
countDownDate.setHours(countDownDate.getHours() + 3);

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minElement = document.getElementById("min");
const secElement = document.getElementById("sec");

const countdownInterval = setInterval(function() {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minElement.innerHTML = minutes;
  secElement.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    daysElement.innerHTML = "";
    hoursElement.innerHTML = "";
    minElement.innerHTML = "";
  }
}, 1000);

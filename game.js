var greaterThan = document.getElementById("greater-than");
var equalTo = document.getElementById("equal-to");
var lesserThan = document.getElementById("lesser-than");

var number1box = document.getElementById("number1");
var number2box = document.getElementById("number2");

var timer = document.getElementById("timer");

var score = 0;
var timeLeft = 5;
var timerId;

function generateNumber() {
  number1 = Math.round(Math.random() * 100);
  number2 = Math.round(Math.random() * 100);
  number1box.innerHTML = number1;
  number2box.innerHTML = number2;
}

var number1, number2;
generateNumber();

greaterThan.onclick = () => {
  if (number1 > number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  generateNumber();
};

equalTo.onclick = () => {
  if (number1 === number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  generateNumber();
};

lesserThan.onclick = () => {
  if (number1 < number2) {
    score++;
    resetTime(timerId);
  } else {
    location.href = "./gameover.html";
  }
  generateNumber();
};

function startTimer() {
  timeLeft = 5;
  timer.innerHTML = timeLeft;

  timerId = setInterval(() => {
    timeLeft--;
    timer.innerHTML = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerId);
      location.href = "./gameover.html";
    }
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();

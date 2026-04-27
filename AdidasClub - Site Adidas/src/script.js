const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
const items = document.querySelectorAll(".item");
let current = 0;
let timer;

function goTo(index) {
  items[current].classList.remove("visible");
  current = (index + items.length) % items.length;
  items[current].classList.add("visible");
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), 4000);
}

prevArrow.addEventListener("click", () => {
  goTo(current - 1);
  startTimer();
});

nextArrow.addEventListener("click", () => {
  goTo(current + 1);
  startTimer();
});

startTimer();
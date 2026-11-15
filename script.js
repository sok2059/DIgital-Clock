const timeDisplay = document.querySelector("#time");
const periodDisplay = document.querySelector("#period");
const dayDisplay = document.querySelector("#day");
const dateDisplay = document.querySelector("#date");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  timeDisplay.textContent =
    `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
  periodDisplay.textContent = period;

  dayDisplay.textContent =
    now.toLocaleDateString("en", { weekday: "short" }).toUpperCase();

  dateDisplay.textContent =
    `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

updateClock();
setInterval(updateClock, 1000);
const screen = document.querySelector(".screen");
const adjustButton = document.querySelector("#adjustButton");
const modeButton = document.querySelector("#modeButton");
const lightButton = document.querySelector("#lightButton");

let is24Hour = false;
let isAdjusting = false;
let lightTimer;

lightButton.addEventListener("click", () => {
  screen.classList.add("backlight");
  clearTimeout(lightTimer);
  lightTimer = setTimeout(() => {
    screen.classList.remove("backlight");
  }, 3000);
});

modeButton.addEventListener("click", () => {
  is24Hour = !is24Hour;
  updateClock();
});

adjustButton.addEventListener("click", () => {
  isAdjusting = !isAdjusting;
  screen.classList.toggle("adjusting", isAdjusting);
});
'use strict';

const arrayHeaven = ["ren", "gui", "Dzja", "i", "bin", "din", "wu", "dzi", "gen", "sin"];
const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];
  let currentMonth = now.getMonth();
  let monthWord = months[currentMonth];

  let now = new Date();


let currentYear = now.getFullYear();
let currentDay = now.getDay();
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentSecond = now.getSeconds();
let current_time = currentHour + "." + currentMinute + "." + currentSecond;

document.getElementById("hour-time").innerHTML = current_time;
document.getElementById("day-time").innerHTML = currentDay;
document.getElementById("month-time").innerHTML = monthWord;
document.getElementById("year-time").innerHTML = currentYear;




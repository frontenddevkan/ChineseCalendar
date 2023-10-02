'use strict';


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


  let now = new Date();
  let currentMonth = now.getMonth();
  let monthWord = months[currentMonth];

const currentYear = now.getFullYear();
const currentDay = now.getDate();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
const currentSecond = now.getSeconds();
const current_time = currentHour + "." + currentMinute + "." + currentSecond;

document.getElementById("hour-time").innerHTML = current_time;
document.getElementById("day-time").innerHTML = currentDay;
document.getElementById("month-time").innerHTML = monthWord;
document.getElementById("year-time").innerHTML = currentYear;




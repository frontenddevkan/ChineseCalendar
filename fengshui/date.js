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


  const now = new Date();
  //Оптимизировал назначение констант, сократил код
const [
  currentMonth,
  currentYear,
  currentDay,
  currentHour,
  currentMinute,
  currentSecond
] = [
  now.getMonth(),
  now.getFullYear(),
  now.getDate(),
  now.getHours(),
  now.getMinutes(),
  now.getSeconds(),
];

const current_time = currentHour + "." + currentMinute + "." + currentSecond;

document.getElementById("hour-time").innerHTML = current_time;
document.getElementById("day-time").innerHTML = currentDay;
document.getElementById("month-time").innerHTML = months[currentMonth];
document.getElementById("year-time").innerHTML = currentYear;




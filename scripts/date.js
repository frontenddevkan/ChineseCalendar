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

  let now;
  let currentHour;
  let currentMinute;
  let currentSecond;
  let currentMonth;
  let monthWord;
  let currentYear;
  let currentDay;


    function update() {
   now = new Date();
  currentHour = now.getHours();
   currentMinute = now.getMinutes();
   currentSecond = now.getSeconds();
  currentMonth = now.getMonth();
   monthWord = months[currentMonth];
    currentYear = now.getFullYear();

  currentDay = now.getDate();

  let current_time = currentHour + ":" + currentMinute + ":" + currentSecond;


if(currentHour < 10) currentHour = '0' + currentHour;
if(currentMinute < 10) currentMinute = '0' + currentMinute;
if(currentSecond < 10) currentSecond = '0' + currentSecond;



document.getElementById("hour-time").innerHTML = current_time;
document.getElementById("day-time").innerHTML = currentDay;
document.getElementById("month-time").innerHTML = monthWord;
document.getElementById("year-time").innerHTML = currentYear;

}

setInterval(update, 1000); // обновление каждую секунду







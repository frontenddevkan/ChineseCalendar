'use strict';

// for time for ouhrs earth trunks

const arrayEarth = ["11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const pathArrayEarth = [];

for(let i = 0; i < arrayEarth.length; i++) {
    pathArrayEarth.push(`https://frontenddevkan.github.io/ChineseCalendar/img/${arrayEarth[i]}.svg`);
}


const startPointEarth = new Date(2023, 10, 14, 0, 0); // 14 november 2023 21:00

const differentTimeHourEarth = Math.floor(now - startPointEarth.getTime()) / (1000 * 60 * 120);

const digitIndexHourEarth = Math.floor(differentTimeHourEarth % 12); // 120 minutes in two hours. and 12 elements.

const imgEarthHour = document.createElement('img');
imgEarthHour.src = pathArrayEarth[digitIndexHourEarth];

const divEarthHour = document.getElementById('div-earth-hour');
divEarthHour.innerHTML = '';
divEarthHour.appendChild(imgEarthHour);

// for Day cycles

const startDateEarth = new Date('2023, 10, 20, 0, 0'); // 20 november 2023;

const currentDateEarth = new Date();

const differentTimeDayEarth = Math.floor(currentDateEarth - startDateEarth) / (24 * 60 * 60 * 1000) ;

const digitIndexDayEarth = Math.floor(differentTimeDayEarth % 12); // days and 12 elements

const imgDayEarth = document.createElement('img');
imgDayEarth.src = pathArrayEarth[digitIndexDayEarth];

const divEarthDay = document.getElementById('div-earth-day');
divEarthDay.innerHTML = '';
divEarthDay.appendChild(imgDayEarth);

// for Month cycles

const startDateEarthMonth = new Date('2023, 10, 20, 0, 0'); // 20 november 2023;

const currentEarthDateMonth = new Date();

const differentMonthEarth = Math.floor(currentEarthDateMonth - startDateEarthMonth) / (30 * 24 * 60 * 60 * 1000);

const digitIndexEarthMonth = Math.floor(differentMonthEarth % 12); // month and 12 elements

const imgMonthEarth = document.createElement('img');
imgMonthEarth.src = pathArrayEarth[digitIndexEarthMonth];

const divEarthMonth = document.getElementById('div-earth-month');
divEarthMonth.innerHTML = '';

divEarthMonth.appendChild(imgMonthEarth);

// for YEAR cycles

const startDateEarthYear = new Date('2019, 1, 1, 0, 0'); // 20 november 2023;
const currentEarthDateYear = new Date();

const differentYearEarth = Math.floor(currentEarthDateYear - startDateEarthYear) / (365 * 24 * 60 * 60 * 1000);


const digitIndexEarthYear = Math.floor(differentYearEarth % 12); // month and 12 elements

const imgYearEarth = document.createElement('img');
imgYearEarth.src = pathArrayEarth[digitIndexEarthYear];

const divEarthYear = document.getElementById('div-earth-year');
divEarthYear.innerHTML = '';
divEarthYear.appendChild(imgYearEarth);




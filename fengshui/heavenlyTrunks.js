'use strict';

// for hours cycles time


const arrayHeaven = ["ren", "gui", "Dzja", "i", "bin", "din", "wu", "dzi", "gen", "sin"];
const pathArrayHeaven = [];

for(let i = 0; i < arrayHeaven.length; i++) {
    pathArrayHeaven.push(`../img/${arrayHeaven[i]}.svg`);
}


const startPoint = new Date(2023, 9, 1, 23, 0); // 1 october 2023 23:00


const differentTimeHour = Math.floor(now - startPoint.getTime()) / (1000 * 60 * 120);

const digitIndexHour = Math.floor(differentTimeHour % 10); // 120 minutes in two hours. and 10 elements.


const img = document.createElement('img');
img.src = pathArrayHeaven[digitIndexHour];

const diveHeavenHour = document.getElementById('div-heaven-hour');
diveHeavenHour.innerHTML = '';
diveHeavenHour.appendChild(img);

// for Day cycles

const startDate = new Date('2023-09-01');
const currentDate = new Date();

const differentTimeDay = Math.floor(currentDate - startDate) / (24 * 60 * 60 * 1000) ;

const digitIndexDay = Math.floor(differentTimeDay % 10); // days and 10 elements
console.log(digitIndexDay);

const imgDay = document.createElement('img');
imgDay.src = pathArrayHeaven[digitIndexDay];

const diveHeavenDay = document.getElementById('div-heaven-day');
diveHeavenDay.innerHTML = '';
diveHeavenDay.appendChild(imgDay);


// for Month cycles
const arrayHeavenMonth = ["sin", "ren", "gui", "Dzja", "i", "bin", "din", "wu", "dzi", "gen"];
const pathArrayHeavenMonth = [];
for(let ite = 0; ite < arrayHeavenMonth.length; ite++) {
    pathArrayHeavenMonth.push(`../img/${arrayHeavenMonth[ite]}.svg`);
}
console.log(pathArrayHeaven);


const startDateMonth = new Date('2023-09-01');
const currentDateMonth = new Date();

const differentMonth = Math.floor(currentDateMonth - startDateMonth) / (30 * 24 * 60 * 60 * 1000) ;
console.log(differentMonth);
const digitIndexMonth = Math.floor(differentMonth % 10); // month and 10 elements

const imgMonth = document.createElement('img');
imgMonth.src = pathArrayHeavenMonth[digitIndexMonth];

const diveHeavenMonth = document.getElementById('div-heaven-month');
diveHeavenMonth.innerHTML = '';
diveHeavenMonth.appendChild(imgMonth);



// for YEAR cycles
const arrayHeavenYear = ["gui", "Dzja", "i", "bin", "din", "wu", "dzi", "gen", "sin", "ren"];
const pathArrayHeavenYear = [];
for(let item = 0; item < arrayHeavenYear.length; item++) {
    pathArrayHeavenYear.push(`../img/${arrayHeavenYear[item]}.svg`);
}
console.log(pathArrayHeavenYear);


const startDateYear = new Date('2023-01-04');
const currentDateYear = new Date();

const differentYear = Math.floor(currentDateYear - startDateYear) / (12 * 30 * 24 * 60 * 60 * 1000) ;

const digitIndexYear = Math.floor(differentYear % 10); // year and 10 elements

const imgYear = document.createElement('img');
imgYear.src = pathArrayHeavenYear[digitIndexYear];

const diveHeavenYear = document.getElementById('div-heaven-year');
diveHeavenYear.innerHTML = '';
diveHeavenYear.appendChild(imgYear);

'use strict';

const arrayHeaven = ["ren", "gui", "Dzja", "i", "bin", "din", "wu", "dzi", "gen", "sin"];
const pathArrayHeaven = [];

for(let i = 0; i < arrayHeaven.length; i++) {
    pathArrayHeaven.push(`../img/${arrayHeaven[i]}.svg`);
}
console.log(pathArrayHeaven);

const startPoint = new Date(2023, 9, 1, 23, 0); // 1 october 2023 23:00


const differentTimeHour = Math.floor(now.getTime() - startPoint.getTime()) / (1000 * 60 * 120);

const digitIndexHour = Math.floor(differentTimeHour % 10); // 120 minutes in two hours. and 10 elements.
console.log(digitIndexHour);

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



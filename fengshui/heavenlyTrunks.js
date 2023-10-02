'use strict';


const arrayHeaven = ["ren", "gui", "Dzja", "i", "bin", "din", "wu", "dzi", "gen", "sin"];
const pathArrayHeaven = [];

for(let i = 0; i < arrayHeaven.length; i++) {
    pathArrayHeaven.push(`../img/${arrayHeaven[i]}.svg`);
}
console.log(pathArrayHeaven);

const startPoint = new Date(2023, 9, 1, 23, 0); // 1 october 2023 23:00
const differentTime = (Math.floor((currentDay) - startPoint.getTime()) / 1000 * 60)*(-1);
const digitIndex = Math.floor((differentTime / 120) % 10); // 120 minutes in two hours. and 10 elements.
console.log(digitIndex);

let img = document.createElement('img');
img.src = pathArrayHeaven[digitIndex];

const diveHeaven = document.getElementById('div-heaven');
diveHeaven.innerHTML = '';
diveHeaven.appendChild(img);



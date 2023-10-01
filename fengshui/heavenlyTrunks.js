'use strict';

const arrayHeaven = ["ren", "gui", "Dzja", "i", "bin", "din", "wu", "dzi", "gen", "sin"];


for(let i = 0; i < 10; i++) {
    arrayHeaven[i] = i + 1;

}


const currentDay = new Date();
const currentHour = currentDay.getHours();
const currentMinute = currentDay.getMinutes();

const startPoint = new Date(2023, 9, 1, 23, 0); // 1 october 2023 23:00

const differentTime = Math.floor((currentDay.getTime() - startPoint.getTime()) / 1000 * 60);

const digitIndex = Math.floor(differentTime / 120) % 10; // 120 minutes in two hours. and 10 elements.

const digit = digitIndex + 1; // 1, 2, 3




console.log('current index: ' + digit);








'use strict';

const arrayHeaven = [
    "ren",
    "gui",
    "Dzja",
    "i",
    "bin",
    "din",
    "wu",
    "dzi",
    "gen",
    "sin"
];
const pathArrayHeaven = arrayHeaven.map((el) => `../img/${el}.svg`);

const diveHeavenHour = document.getElementById('div-heaven-hour');
const diveHeavenDay = document.getElementById('div-heaven-day');
const diveHeavenMonth = document.getElementById('div-heaven-month');
const diveHeavenYear = document.getElementById('div-heaven-year');

console.log(pathArrayHeaven);

//Функция для создания и подключения картинок в документ

function createImg(parrent, path) {
    const img = document.createElement('img');
    img.src = path;
    parrent.innerHTML = '';
    parrent.appendChild(img);
};

const startPoint = new Date(2023, 9, 1, 23, 0); // 1 october 2023 23:00


const differentTimeHour = (now - startPoint.getTime()) / (1000 * 60 * 120);

const digitIndexHour = Math.floor(differentTimeHour % 10); // 120 minutes in two hours. and 10 elements.
console.log(digitIndexHour);

createImg(diveHeavenHour, pathArrayHeaven[digitIndexHour])

// for Day cycles

const startDate = new Date('2023-09-01');

const differentTimeDay = (now - startDate) / (24 * 60 * 60 * 1000) ;

const digitIndexDay = Math.floor(differentTimeDay % 10); // days and 10 elements

createImg(diveHeavenDay, pathArrayHeaven[digitIndexDay])
//
//
// for Month cycles


const differentMonth = (now - startDate) / (30 * 24 * 60 * 60 * 1000) ;
console.log(differentMonth);
const digitIndexMonth = Math.floor(differentMonth % 10); // month and 10 elements

createImg(diveHeavenMonth, pathArrayHeaven[digitIndexMonth === 0? 9 : digitIndexMonth - 1])



// for YEAR cycles

const startDateYear = new Date('2023-01-04');

const differentYear = (now - startDateYear) / (12 * 30 * 24 * 60 * 60 * 1000) ;

const digitIndexYear = Math.floor(differentYear % 10); // year and 10 elements

createImg(diveHeavenYear, pathArrayHeaven[digitIndexYear === 9? 0 : digitIndexYear + 1])


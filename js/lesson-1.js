// --------1----------
//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
const number = prompt("Enter number")
let hours = Number.parseInt(number / 60);
let minutes = number % 60;
minutes = String(minutes).padStart(2, 0)
hours = String(hours).padStart(2, 0)
console.log(`${hours}:${minutes}`)
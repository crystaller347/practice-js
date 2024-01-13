// --------1----------
//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
// const number = prompt("Enter number")
// let hours = Number.parseInt(number / 60);
// let minutes = number % 60;
// minutes = String(minutes).padStart(2, 0)
// hours = String(hours).padStart(2, 0)
// console.log(`${hours}:${minutes}`)

// task2
// Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b

// function min(a,b) {
//     return Math.min(a,b)
// }
// console.log(min(12,456))

// task3
// --------3---------
// Наступна функція має повертати true, якщо параметр age більше чи дорівнює 18.

// const age = prompt("Enter your age");
// function userAge(age){
//     return age>=18;
// }
// console.log(userAge(age))

// ---------4-------
// Оголоси функцію favoriteLanguage, яка буде повертати повідомлення
// "I love <language>! I have been studying it for <years> years."
// де language і years - це параметри, які очікує функція, мова (рядок)
// і роки (число).

// в результаті виклику функції в консолі має бути повідомлення:
// console.log(favoriteLanguage("English", 15)); // "I love English! I have been studying it for 15 years."
// console.log(favoriteLanguage("JavaScript", 3)); // "I love JavaScript! I have been studying it for 3 years."

// function favoriteLanguage(
//   language,
//   years
// ) {
//   return `I love ${language}! I have been studying it for ${years} years.`;
// }

// console.log(
//   favoriteLanguage("English", 15)
// );

// -----------5-----------
// Введи значення в prompt і перевір чи є воно числом
const answer = Number(
  prompt("enter something")
);

console.log(
  `${answer} - ${!Number.isNaN(answer)}`
);

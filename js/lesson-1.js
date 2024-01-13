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
// const answer = Number(
//   prompt("enter something")
// );

// console.log(
//   `${answer} - ${!Number.isNaN(answer)}`
// );

// ---------6-------------
// Запитай користувача про його ім'я та прізвище,
// а потім виведb вітання, об'єднуючи ці дані в один ряд

// const firstName = prompt("What is your name?");
// const lastName = prompt("What is your surname?");
// alert(`Hello ${firstName} ${lastName}`);
// confirm (`Hello ${firstName} ${lastName}`);

// ----------8------------
// Напиши функцію randomInRange, яка буде приймати два числа (min, max) і повертати
// випадкове число в діапазоні цих двох чисел

// function randomInRange (min, max) {
//  return parseInt(Math.random() * (max - min + 1) + min); //Від мінімального значення до максимального |ВКЛЮЧНОО!!|
//  }
//  console.log(randomInRange(100, 200))

// ---------7-------------
// Попроси користувача ввести своє повідомлення в prompt.
// Після чого виведи в консоль довжину цього повідомлення,
// індекс останнього елемента в повідомленні і
// останній елемент, приведений до верхнього регістру

// const message = prompt("Enter your message")

// const messageLength = message.length;
// const messageLastIndex = message.length - 1;
// const messageLastIndexUpperCase = message[messageLastIndex].toUpperCase();

// console.log(messageLength, messageLastIndex, messageLastIndexUpperCase);

// ----------9-----------
// Запитуй у користувача число в prompt.
// Створи функцію, яка буде приймати це число і возводити його в його ж ступінь
// Функція має повертати рядок "<число> в ступені <число> дорівнює <число возведено в ступінь>"

// const number = prompt("Enter your number");

// function numberInDegree(number) {
// //   const numberW = number ** number;

//     const numberW = Math.pow(number, number);
//     return `${number} в ступені ${number} дорівнює ${numberW}`
// }

// console.log(numberInDegree(number));

// Питання:
// ----------------------------------------------------

// Який результат буде виведено в консоль?
// console.log(typeof typeof 1);
// typeof 1 = 'number
// typeof typeof 1 = typeof 'number' = string

// ------------------------------------------------------
// Що відобразиться в консолі:
// console.log(Number(undefined));

// console.log("10" - 8 + true);
// console.log(5 + 5 + "5");
// ++++++++++++++++++++++++++++++++++++++++++

// const a = 10;
// function check() {
//     const a = 20;
//   console.log(a);
// }
// check(); //* 20

// function check() {
//   const a = 20;
// }
// check();
// console.log(a);

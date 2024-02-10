//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const answer = prompt("Яка офіційна назва JavaScript?")
// if (answer ==="ECMAScript") {
//     alert ("Вірно!")
// } else{
//     alert ("Не знаєте? ECMAScript!")
// }

// alert(answer ==="ECMAScript" ? "Вірно!" : "Не знаєте? ECMAScript!")

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел

// const max = 100;
// const min = 10;
// let total = 0;

// for (let i=max; i>=min; i-=1) {

//  console.log(i);
//     if (i % 2 === 0) {
//         total += i;
//     }
// }
// console.log(total);

// function getNumbers (min, max) {
//     let total = 0;

//     for (let i=max; i>=min; i-=1) {
//     console.log(i);

//         if (i % 2 === 0) {
//             total += i;
//         }
//     }
//     return total;
// }
// console.log(getNumbers(20, 200));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = prompt("Enter number")
// let result = "";
// switch (Number(num)) {
//     case 1:
//         result = "зима"
//         break;
//     case 2:
//         result = "весна"
//         break;
//     case 3:
//         result = "літо"
//         break;
//     case 4:
//         result = "осінь"
//         break;

//     default:
//         result = "Число повинно бути від 1 до 4";
// }
// console.log(`${num} - ${result}`)

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера

//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Enter login");

// console.log(login);

// if (login === "Адмін") {
//     const password = prompt("Enter password");
//     if (password === "Я головний") {
//         console.log("Вітаю!")
//     } else {
//         console.log("Невірний пароль!");
//     }
// } else if (login === "" || login === null) {
//     console.log("Скасовано")
// } else {
//     console.log("Я вас не знаю")
// }

// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'

// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// const index = styles.indexOf("Блюз");
// if (index !== -1) {
//   styles[index] = "Класика";
// }

// function logItems(array) {
//   for (let i = 0; i <= array.length - 1; i += 1) {
//     console.log(`${i + 1}-${array[i]}`);
//   }
// }

// logItems(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const login = prompt("enter login");
//   if (array.includes(login)) {
//     console.log("Доступ дозволено");
//   } else {
//     console.log("Користувач не знайден");
//   }
// }
// checkLogin(logins);

// Напишіть функцію min(a, b), яка повертає
// меньше з чисел a, b
//Додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number";
//   }
//   return Math.min(a, b);
// }
// console.log(min(4, 10));
// console.log(min(5, "two"));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNumber(array) {
//     const newArray = []
//     for (let index = 0; index < array.length-1; index++) {
//        newArray.push(array[index] +array[index+1]);
        
//     }
//     return  newArray
// }
// console.log(sumNumber(someArr))



//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage () {

//     const totalNumbers = arguments;
//     let sumNumber = 0;
//     let total = 0;
//     for (const number of totalNumbers){
         
//         if (typeof number === "number") {
//             sumNumber += number;
//             total += 1;
//         }
//     }
//         return sumNumber/total;
// }
// console.log(caclculateAverage(1,2,3,4,5,6,7,"ololol"));


//Напишіть функції для роботи з масивом
//add(name) додає ім'я до кінця колекції
//remove(name) видаляє ім'я із колекції
//update(oldName, newName) змінює ім'я на нове

// const names = ["Alla", "Petro", "Max", "Olena", "Boris"];

// function add(name) {
//     if (names.includes(name)) {
//         return "Користувач вже існує";
//     }
//     names.push(name)
//     return names;
// }
// console.log(add("Timur"))
// console.log(add("Timur"))


// function remove(name) {
//     const index = names.indexOf(name)
//     if (index === -1) {
//         return "Користувач не знайденний";
        
//     }
//     names.splice(index, 1)
//     return names;
// }
// console.log(remove("Max"))
// console.log(remove("Richard"))

// function update(oldName, newName) {
//     const index = names.indexOf(oldName);
//      if (index === -1) {
//         return "Користувач не знайденний";
        
//     }
//     // names.splice(index, 1, newName)
//     names[index] = newName;
//     return names;
// }
// console.log(update("Alla", "Sergei"))
// console.log(update("Alla", "Nast"))
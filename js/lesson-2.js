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

const login = prompt("Enter login");

console.log(login);

if (login === "Адмін") {
    const password = prompt("Enter password");
    if (password === "Я головний") {
        console.log("Вітаю!")
    } else {
        console.log("Невірний пароль!");
    }
} else if (login === "" || login === null) {
    console.log("Скасовано")
} else {
    console.log("Я вас не знаю")
}


//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const table = document.querySelector("#productTable");
// const details = document.querySelector("#productDetails");

// table.addEventListener("click", clickElement);

// function clickElement(event) {

//     if (event.target.nodeName !== "TD") {
//         return;
//     }
//     const parent = event.target.parentNode;
//     const product = parent.firstElementChild.textContent;
//     const price = parent.lastElementChild.textContent;
    
//     details.textContent = `Ви вибрали ${product} з ціною ${price}`;

// }


//TODO:
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

// const list = document.querySelector(".statList");
// const resultBtn = document.querySelector("#resultButton")
// const output = document.querySelector("#resultSection");

// list.addEventListener("click", clickHandle);
// resultBtn.addEventListener("click", showResult)

// let sum = 0;

// let stats = {
// }

// function clickHandle(event) {
//     if (!event.target.classList.contains("calcButton")) return;

//     const number = Number(event.target.dataset.number);
//     sum += number;
//     const key = event.target.textContent;
//     if (stats[key]) {
//         stats[key] += 1;
//     } else {
//         stats[key] = 1;
//     }

    

// }


// function showResult() {
//     const statArray = Object.entries(stats);
//     let markup = `Загальна сума: ${sum}.<br>`;
//     for (const [key, value] of statArray) {
//         markup += `${key} натиснута ${value} разів.<br>`
//     }
//     output.innerHTML = markup;
//     sum = 0;
//     stats = {};
    
// }


//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

const table = document.querySelector("#productTable");
const details = document.querySelector("#productDetails");

table.addEventListener("click", clickElement);

function clickElement(event) {

    if (event.target.nodeName !== "TD") {
        return;
    }
    const parent = event.target.parentNode;
    const product = parent.firstElementChild.textContent;
    const price = parent.lastElementChild.textContent;
    
    details.textContent = `Ви вибрали ${product} з ціною ${price}`;

}
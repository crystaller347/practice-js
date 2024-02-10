//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key} : ${user[key]}`);
// }

//Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат

// const calculator = {
//   read(a, b) {
//     this.valueA = a;
//     this.valueB = b;
//   },
//   sum() {
//     if (this.valueA && this.valueB) return this.valueA + this.valueB;
//     return "Values are not exist!"
//   },
//   mult() {
//     if (this.valueA && this.valueB) return this.valueA * this.valueB;
//     return "Values are not exist!"
//   }
// };

// // console.log(calculator.read(10, 20));
// console.log(calculator.sum());
// console.log(calculator.mult());











//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій

//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостями id, type, amount

const account = {
    //поточний баланс рахунка
    balance: 0,

    //Історія транзакцій
    transactions: [],

    //Метод створює і повертає об'єкт транзакцій
    //Приймає сумму і тип транзакцій
    createTransaction(type, amount) {
        return {
            type,
            amount,
        };
    },
    //Метод відповідає за додавання сумми к балансу.
    //Приймає сумму транзакціи.
    //Визиває createTransaction для створення об'єкта транзакціи
    //після чого додає його в історію транзакцій
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
        this.transactions.push({...transaction, id: Math.random() });
    },

    //Метод відповідає за зняття сумми з балансу.
    //Приймає сумму транзакціи.
    //Визиває createTransaction для створення об'єкта транзакціи
    //після чого додає йогого в історю транзакцій
    //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
    //що недостатньо коштів на рахунку
    withdraw(amount) {
        if (amount > this.balance)
            return console.log('Not anouth money');
        this.balance -= amount;
        const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
        this.transactions.push({...transaction, id: 1 });
    },

    //Метод повертає поточний баланс
    getBalance() {
        return `You have ${this.balance} moneys`
    },

    //Метод шукає і повертає об'єкт транзакціи по id
    getTransactionDetails(id) {
        const transaction = this.transactions.find(item => item.id === id)
        if (transaction)
            return transaction;
        return "Transaction not found!"
    },

    //Метод повертає кількіств коштів вказаного типу
    //транзакціи зі всієї історії транзакцій
    getTransactionType(type) {
        let total = 0
            // for (const transaction of this.transactions) {
            //     if (transaction.type === type) {
            //         total += transaction.amount
            //     }
            // }
        this.transactions.forEach(transaction => {
            if (transaction.type === type) {
                total += transaction.amount
            }
        });
        return total
    },
}

account.deposit(300)
account.deposit(1200)
account.deposit(211)
account.withdraw(21100)
account.withdraw(111)

console.log(account.getTransactionDetails(1))
console.log(account.getTransactionType(Transaction.DEPOSIT))

console.log(account)
console.log(account.getBalance())
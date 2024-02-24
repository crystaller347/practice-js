// //Напиши скрипт, який для об'єкту user,
// //послідовно:
// //1 додасть поле mood зі значенням 'happy'
// //2 замінить hobby на 'skydiving'
// //3 замінить значення premium на false
// //4 виводить зміст об'єкта users у форматі
// //ключ:значення використовуя Object.keys() та for...of
// // const user = {
// //   name: "John",
// //   age: 20,
// //   hobby: "tenis",
// //   premium: true,
// // };

// // user.mood = 'happy';
// // user.hobby = 'skydiving';
// // user.premium = false;
// // const keys = Object.keys(user);
// // for (const key of keys) {
// //     console.log(`${key} : ${user[key]}`);
// // }

// //Створіть об'єкт calculator з трьомя методами
// //read(a, b) - приймає два аргумента і зберігає їх
// //як властивості об'єкта
// //sum() повертає сумму збереженних значень (з перевіркою на наявніст властивостей в об'єкті)
// //mult() перемножає збереженні значення і повертає результат

// // const calculator = {
// //   read(a, b) {
// //     this.valueA = a;
// //     this.valueB = b;
// //   },
// //   sum() {
// //     if (this.valueA && this.valueB) return this.valueA + this.valueB;
// //     return "Values are not exist!"
// //   },
// //   mult() {
// //     if (this.valueA && this.valueB) return this.valueA * this.valueB;
// //     return "Values are not exist!"
// //   }
// // };

// // // console.log(calculator.read(10, 20));
// // console.log(calculator.sum());
// // console.log(calculator.mult());

// //5. Напишіть скрипт керування особистим кабінетом інтернет банка
// //Є об'єкт account в якому необхідно реалізувати
// //методи для работи з балансом та історією транзакцій

// //Типів транзакцій всього два.
// //Можна покласти або зняти гроші з рахунка
// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
// };

// //Кожна транзакція це об'єкт з властивостями id, type, amount

// const account = {
//     //поточний баланс рахунка
//     balance: 0,

//     //Історія транзакцій
//     transactions: [],

//     //Метод створює і повертає об'єкт транзакцій
//     //Приймає сумму і тип транзакцій
//     createTransaction(type, amount) {
//         return {
//             type,
//             amount,
//         };
//     },
//     //Метод відповідає за додавання сумми к балансу.
//     //Приймає сумму транзакціи.
//     //Визиває createTransaction для створення об'єкта транзакціи
//     //після чого додає його в історію транзакцій
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
//         this.transactions.push({...transaction, id: Math.random() });
//     },

//     //Метод відповідає за зняття сумми з балансу.
//     //Приймає сумму транзакціи.
//     //Визиває createTransaction для створення об'єкта транзакціи
//     //після чого додає йогого в історю транзакцій
//     //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//     //що недостатньо коштів на рахунку
//     withdraw(amount) {
//         if (amount > this.balance)
//             return console.log('Not anouth money');
//         this.balance -= amount;
//         const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
//         this.transactions.push({...transaction, id: 1 });
//     },

//     //Метод повертає поточний баланс
//     getBalance() {
//         return `You have ${this.balance} moneys`
//     },

//     //Метод шукає і повертає об'єкт транзакціи по id
//     getTransactionDetails(id) {
//         const transaction = this.transactions.find(item => item.id === id)
//         if (transaction)
//             return transaction;
//         return "Transaction not found!"
//     },

//     //Метод повертає кількіств коштів вказаного типу
//     //транзакціи зі всієї історії транзакцій
//     getTransactionType(type) {
//         let total = 0
//             // for (const transaction of this.transactions) {
//             //     if (transaction.type === type) {
//             //         total += transaction.amount
//             //     }
//             // }
//         this.transactions.forEach(transaction => {
//             if (transaction.type === type) {
//                 total += transaction.amount
//             }
//         });
//         return total
//     },
// }

// account.deposit(300)
// account.deposit(1200)
// account.deposit(211)
// account.withdraw(21100)
// account.withdraw(111)

// console.log(account.getTransactionDetails(1))
// console.log(account.getTransactionType(Transaction.DEPOSIT))

// console.log(account)
// console.log(account.getBalance())

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: [
//       "tempor",
//       "mollit",
//       "commodo",
//       "veniam",
//       "laborum",
//     ],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: [
//       "Marilyn Mcintosh",
//       "Padilla Garrison",
//       "Naomi Buckner",
//     ],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Task 1

// // Отримати масив імен усіх користувачів (поле name).
// // console.log(getUserNames(users))
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // function getUserNames(array){
// //     return array.map(user =>user.name)
// // }

// // function getUserProp(array, property){
// //     return array.map(user =>user[property])
// // }

// // console.log(getUserProp(users, "age"))

// // Task 2

// // Отримати масив користувачів віком від min до max
// //  console.log (getUsersWithAge (users, 20, 30));
// // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// // console.log (getUsersWithAge (users, 30, 40));
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// // function getUsersWithAge(array, min, max) {
// //   return array.filter((user) => user.age >= min && user.age <= max);
// // }

// // Task 3

// // Отримати масив імен користувачів по полю (поле gender)
// // console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // function getUsersWithGender(array, gender){
// //     // return array.filter((user) =>user.gender === gender).map(user => user.name)

// //     return array.reduce((userNames, user) =>  user.gender === gender ? [...userNames,user.name]:userNames
// //     ,[])
// // }

// // Task 4

// // Отримати масив всіх навичок усіх користувачів (поле skills), при цьому не повинно бути
// // повторювань навичок і вони мають бути відсортовані в алфавітному порядку.
// // console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// // function getSortedUniqueSkills(array) {
// //   return array
// //     .flatMap((user) => user.skills)
// //     .filter(
// //       (skill, index, arr) => arr.indexOf(skill) === index
// //     )
// //     .toSorted((a, b) => a.localeCompare(b));
// // }

// // Task 6

// //Створити статистику - об'єкт, у якому вказується кількість тегів
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const statistyc = {};
// tweets
//   .flatMap((tweet) => tweet.tags)
//   .forEach((tag) => {
//     if (statistyc[tag]) statistyc[tag] += 1;
//     else statistyc[tag] = 1;
//     console.log(statistyc);
//   });

// console.log(statistyc);

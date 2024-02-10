//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//ключ:значення використовуя Object.keys() та for...of
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key} : ${user[key]}`);
}
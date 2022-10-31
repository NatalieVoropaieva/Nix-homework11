function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petro = { name: "Петро", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petro, masha ];
alert( getAverageAge(arr) );
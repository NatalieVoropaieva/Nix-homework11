let vasya = { name: "Вася", age: 25 };
let petro = { name: "Петро", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petro, masha ];

let names = users.map(item => item.name);

alert( names );
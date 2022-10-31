function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
let vasya = { name: "Вася", age: 25 };
let petro = { name: "Петро", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petro, masha ];
sortByAge(arr);
alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);
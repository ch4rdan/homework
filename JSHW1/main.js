
// 1) описание
const myName = 'Sasha'
const myAge = 16
const myheight = 178
const myHairColor = 'Blond'
const myEyesColor = 'Pale Blue'
console.log(myName, myAge, 'y.o', myheight, 'cm', myHairColor, myEyesColor)

console.log(`hello` + `` + `world`)

// 2) Приветствие
let hello = (name) => "Hello " + name;
console.log(hello("Alex"));

// 3) Числа больше 10
let nums = [5, 12, 8, 15, 3, 20];
nums.forEach(num => {
    if (num > 10) console.log(num);
});

// 4) Калькулятор
let math = (a, b, op) => {
    if (op === 'plus') return a + b;
    if (op === 'minus') return a - b;
    if (op === 'multiply') return a * b;
    if (op === 'divide') return a / b;
};

let answer = math(2, 3, 'plus');
console.log(answer);

// 5) работа с масивами
const users = [
    { name: "Анна", age: 25, isAdmin: true },
    { name: "Иван", age: 30, isAdmin: false },
    { name: "Мария", age: 22, isAdmin: false },
    { name: "Петр", age: 35, isAdmin: true },
    { name: "Ольга", age: 28, isAdmin: false }
];

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        simpleUsersCount++;
    }
}

console.log("Количество простых пользователей:", simpleUsersCount);
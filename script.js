///// 1 Задание /////
const number = [2, 3]
const double = number.map(num => num ** 2)

console.log (double)

///// 2 Задание /////

const array = [1, 2, 2, 3, 4, 5, 5, 5, 6]
const uniqueArray = array.filter((value, index) => array.indexOf(value) === index)

console.log (uniqueArray)

///// 3 Задание /////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sum = numbers.reduce((total, num) => total + num, 0)

console.log (sum)

///// 4 Задание /////

const original = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversedArray.push(original[i]);
}

console.log("Исходный:", original);
console.log("Развернутый:", reversedArray);

///// 5 Задание /////

let strLet = "Nike";
const strConst = "Pro";

strLet = "Nike Pro"; /* let можно изменить
strConst = "Nike Pro"; Нельзя изменить значение const */

console.log("С let:", strLet);
console.log("С const:", strConst); 

let arrLet = [1, 2, 3];
const arrConst = [4, 5, 6];

arrLet.push(4); 
arrConst.push(7); /* Можно изменять массивы и в const и в let */

console.log("С let после добавления:", arrLet);
console.log("С const после добавления:", arrConst);

arrLet = [10, 11]; /* let можно переопределить
arrConst = [8, 9]; Нельзя переопределить const */

console.log("Новый массив с let:", arrLet);
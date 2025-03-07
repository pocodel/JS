// // hello!

// let obj = {};

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// let a = new A();
// let b = new B();

// console.log(a == b);

// ++++++++++++++++++++++++++++++++++++++++++++++++


// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

// function Calculator() {

//     this.read = function() {
//         this.a = +prompt('enter a', 0);
//         this.b = +prompt('enter b', 0);
//     }

//     this.sum = function() {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. 
// Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.


// function Accumulator (startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('enter value', 0);
//     }
// }

// let accumulator = new Accumulator(1);

// accumulator.read();

// console.log(accumulator.value);

// // hello!

// Напишите функцию camelize(str), которая преобразует строки вида
//  «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

let camelize = (str) => {
   return str
    .split('-')
    .map((item, index) => 
    (index == 0) ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join('');
}

console.log(camelize('bo-bob-dop'));


///////////////////////////////////////////////////////////////////////////////////////

Напишите функцию filterRange(arr, a, b),
которая принимает массив arr, ищет элементы со значениями больше или равными
a и меньше или равными b и возвращает результат в виде массива.


let numbers = [5, 3, 8, 1];

let filteredRange = (arr, a, b) => {
    return arr.filter(item => (a <= item && item <= b));
}

let filter = filteredRange(numbers, 1, 4);

console.log(filter);

///////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения кроме тех,   
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

let numbers = [5, 3, 8, 1, 4, 2, 9];

let filterRangePlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
       let value = arr[i];

       if (value < a || value > b) {
        arr.splice(i, 1);
        i--;
       }
    }
}

filterRangePlace(numbers, 1, 4);

alert(numbers);


///////////////////////////////////////////////////////////////////////////////////////

// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);

///////////////////////////////////////////////////////////////////////////////////////

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];


let copySorted = (arr) => {
    
    return arr.slice().sort();
}

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

///////////////////////////////////////////////////////////////////////////////////////

let Calculator = function(str){
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calculate = function(str) {
        let split = str.split(' ');
        let a = +split[0];
        let op = split[1];
        let b = +split[2];
        
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        } return this.methods[op](a, b); 
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;

calc.addMethod('*', (a, b) => a * b);
let result = calc.calculate('3 * 3');
alert(result);


///////////////////////////////////////////////////////////////////////////////////////

// У вас есть массив объектов user, 
// и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

alert((names));

///////////////////////////////////////////////////////////////////////////////////////

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let userMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));

alert(userMapped[1].fullName);
alert(userMapped[1].id);

console.log((userMapped));

///////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию sortByAge(users), 
// которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let sortByAge = (arr) => {
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(users);
console.log(users);

///////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию getAverageAge(users),
// которая принимает массив объектов со свойством age и возвращает средний возраст.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [ vasya, petya, masha ];

let averageAge = (arr) => {
    return arr.reduce((sum, user) => sum + user.age, 0) / users.length;
}

console.log(averageAge(users));

///////////////////////////////////////////////////////////////////////////////////////

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив,
//  содержащий только уникальные элементы arr.

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"];

    let uniqe = (str) => {

        let result = [];
        
        for (let st of str) {
            if (!result.includes(st)) {
                result.push(st);
            }
        }

        return result;
    }

console.log(uniqe(strings));

///////////////////////////////////////////////////////////////////////////////////////

// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), 
// которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  
  let usersById = groupById(users);

  console.log(usersById);









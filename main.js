// hello!

// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму 
// всех зарплат с помощью метода Object.values и цикла for..of.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  let sumSalaries = (salaries) => {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
  };

  alert(sumSalaries(salaries));

// ////////////////////////////////////////////////////////////////////////////////

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30,
    age3: 3230
  };

  let count = (obj) => {
      return Object.keys(obj).length;
  }

 console.log(count(user));










// hello!

// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
    name: "John",
    years: 30,
    isAdmin: true,
};

let {name, years: age, isAdmin = false} = user;

alert(isAdmin);

// ///////////////////////////////////////////////////////////////////////////


// Создайте функцию topSalary(salaries), 
// которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  let topSalaries = (obj) => {
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(obj)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
  }

  console.log(topSalaries(salaries));




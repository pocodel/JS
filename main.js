// hello!
// Используя конструкцию if..else, напишите код, который будет спрашивать: 
// „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!»,
//  в противном случае – отобразить: «Не знаете? ECMAScript!»

let answer = prompt('off name js','');

if (answer == ('ecma')) {
    alert('yes');
} else alert('no')

// Используя конструкцию if..else, напишите код, который получает число через prompt,
//  а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.

let number = prompt('enter number','');

if (number > 0) {
    alert('1');
} else if (number < 0) {
    alert('-1');
} else {
    alert('0');
}


// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.

let login = prompt('enter login','');

let message = (login == 'сотрудник') ? 'hi' :
 (login == 'директор') ? 'hello' : 'who';

 alert(message);




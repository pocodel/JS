// hello!

// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
   if (i % 2 == 0) {
    alert(i);
   } 
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

let i = 0;
while(i < 3) {
    alert( `number ${i}!` );
    i++;
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. 
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
// либо не нажмёт кнопку Отмена (ESC).

let number;
do {
    number = prompt('enter number >= 100', 0);

} while (number <= 100 && number);

    alert(number);

// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.


outer: for (let i = 2; i <= 10; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j == 0) continue outer;
            } 
            alert(i);   
        } 

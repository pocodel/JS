// // hello!

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения 
// до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, 
// отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

let readNumber = () => {
    let number;
    do {
        number = prompt('enter number', '');
        if (number == null) {
            console.log(number);
        }
    } while (!isFinite(number));

    if (number == '' || number == null) return null;
    return +number;
}


alert(readNumber());


// Нам нужно преобразовать каждое значение из интервала 0…1 в значения от min до max.
// Это можно сделать в 2 шага:
// Если мы умножим случайное число от 0…1 на max-min,
//  тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
// И, если мы прибавим min, то интервал станет от min до max.
// Функция:

let random = (min, max) => {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5));


// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer)
//  число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:

let randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

console.log(randomInteger(1, 5));
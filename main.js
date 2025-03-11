// // hello!

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

let ucFirst = (str) => {
   if (!str) return str;
   return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('hello!'));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Напишите функцию checkSpam(str), возвращающую true,
//  если str содержит 'viagra' или 'XXX', а иначе false.

let checkSpam = (str) => {
    str = str.toLowerCase();
    if (str.includes('viagra') || str.includes('xxx')) {
        return true;
    } else return false;
}

console.log(checkSpam('xxx'));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, 
// либо, если необходимо, усечённая строка.

let truncate = (str, maxlength) => {
    return (str.length > maxlength) ?
     str.slice(0, maxlength - 3) + '...' : str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), 
// которая будет из такой строки выделять числовое значение и возвращать его.


let ectractCurencyValue = (str) => {
    return +str.slice(1);
}

console.log(ectractCurencyValue('$100'));
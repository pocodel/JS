// hello!

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

let toSum = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

alert(toSum(100));

let toSum = (n) => {
    if (n < 1) {
        return n + toSum(n - 1);
    } else {
        return 1;
    }
}

alert(toSum(3));


let toSum = (n) => {
    return n * (n + 1) / 2;
}

alert(toSum(4));


/////////////////////////////////////////////////////////////////////////////////////

// адача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

let dac = (n) => {
    if (n == 1) {
        return 1;
    } else {
        return n * dac(n - 1);
    }
}

alert(dac(5));

/////////////////////////////////////////////////////////////////////////////////////



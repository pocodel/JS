// hello!

function checkAge(age){
    return (age > 18) ? true : confirm('sooooo');
}

alert(checkAge(19));



function checkAge(age){
    return (age > 18) || confirm('fff');
}

alert(checkAge(19));



function min(a, b){
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

alert(min(1, 2));


// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, 
// т.е. целые от 1 и выше.

function pow(x, n) {

    let result = x;
    for (let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt('enter x', '');
let n = prompt('enter n', '');

if (n >= 1 && n % 1 == 0){
    alert(pow(x, n));
} else alert('nope');


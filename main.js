// hello!

let  printNumbers = (from, to) => {
   let current = from;

   let timerID = setInterval(function() {
    alert(current);
    if (current == to) {
        clearInterval(timerID);
    }

    current++;
   }, 1000);
}

console.log(printNumbers(1, 6));





let printNumbers = (from, to) => {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000)
}

console.log(printNumbers(5, 10));

////////////////////////////////////////////////////////////////


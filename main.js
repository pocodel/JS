// hello!

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

let arr = [1, 2, 3, 4, 5, 6, 7];

let inBetween = (a, b) => {
    return function(x) {
        return x >= a && x <= b;
    }
}

alert(arr.filter(inBetween(3,6)));

 let arr = [1, 2, 3, 4, 5, 6, 7];

 let inArray = (arr) => {
    return function(x) {
        return arr.includes(x);
    }
 }


 alert(arr.filter(inArray([1, 2, 10])));


/////////////////////////////////////////////////////////////

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter); // и добавлять стрелка в массив
      i++;
    }
  
    // ...а в конце вернуть массив из всех стрелков
    return shooters;
  }
  
  let army = makeArmy();

  // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.
// // hello!

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». 
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

let arr = ['jazz', 'bluzz'];

arr.push('rock');

console.log(arr);

arr[((arr.length - 1) / 2)] = 'class';
console.log(arr);

console.log(arr.shift());

console.log(arr);

arr.unshift('rap', 'reggi');

console.log(arr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, 
// пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

let = sumInput = () => {
    
    let arr = [];
    
    while (true) {
        let value = prompt('enter num', 0);
        
        if (value === null || value === '' || !isFinite(value)) break;
        
        arr.push(+value);
    }

    let count = 0;
    
    for (let arrs of arr) {
        count += arrs;
    }

    console.log(arr);
    console.log(count);
}

sumInput();

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      
      maxSum = Math.max(maxSum, partialSum); 

      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
  }

  alert( getMaxSubSum([-1, 2, 3, -9]) ); 


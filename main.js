// hello!

// Создайте функцию unique(arr), 
// которая вернёт массив уникальных, 
// не повторяющихся значений массива arr.

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"];

let uniqe = (arr) => {
    return Array.from(new Set(arr));
}

alert(uniqe(values));

// ///////////////////////////////////////////////////////////


// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = (arr) => {
    let map = new Map();
    
    arr.forEach(element => {
        let sortedKey = element.toLowerCase().split('').sort().join('');
        if (!map.has(sortedKey)) {
            map.set(sortedKey, element);
        }
    });
        return Array.from(map.values());

}

console.log(aclean(arr));

// ///////////////////////////////////////////////////////////








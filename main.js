
let date = new Date(2012, 1, 20, 3, 12);

alert(date);


/////////////////////////////////////////////////////////////////

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: 
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let arr = ['sun', 'mn', 'th', 'wh', 'tha', 'fr', 'sat'];

let getWeekDay = (date) => {
    return arr[date.getDay()]
};

date = new Date(2025, 2, 21);

console.log(getWeekDay(date));


/////////////////////////////////////////////////////////////////

// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.


let getLocalDate = (date) => {
    if (date.getDay() == 0) {
        return 7;
    } else return date.getDay();
};

let date = new Date(2025, 2, 21);

console.log(getLocalDate(date));


/////////////////////////////////////////////////////////////////

// Создайте функцию getDateAgo(date, days), 
// возвращающую число, которое было days дней назад от даты date.

let date = new Date(2025, 2, 21);

let getDateAgo = (date, day) => {
    let copy = new Date(date);
    copy.setDate(date.getDate() - day);

    return copy;
};

console.log(getDateAgo(date, 1));

/////////////////////////////////////////////////////////////////

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. 
// Иногда это 30, 31 или даже февральские 28/29.


let getLastDayOfYear = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();

}

console.log(getLastDayOfYear(2012, 1));

/////////////////////////////////////////////////////////////////

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

let getSecondsToday = () => {
    let hour = new Date();
    hour = (hour.getHours() * 3600) + (hour.getMinutes() * 60) + hour.getSeconds();
    alert(hour);
}

getSecondsToday();

/////////////////////////////////////////////////////////////////

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

let getSecondsToTomorrow = () => {
    let time = new Date();
    let full = 86400;

    return full - (time = (time.getHours() * 3600) + (time.getMinutes() * 60) + time.getSeconds());
};

console.log(getSecondsToTomorrow());

/////////////////////////////////////////////////////////////////







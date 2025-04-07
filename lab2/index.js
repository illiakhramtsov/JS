// Функція для знаходження мінімального та максимального значення в масиві
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return [min, max]; // Повертаємо масив з мінімальним і максимальним значенням
}

// Виконання першого завдання
function firstTask() {
    let values = [-8, 3, 1, -5, 12, 8, 6];
    let [minValue, maxValue] = findMinMax(values);
    console.log("Наступне завдання");
    console.log(values);
    console.log(`Min: ${minValue}, Max: ${maxValue}`);
}

// Функція для порівняння двох об'єктів за їхніми властивостями
function areObjectsEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false; // Перевіряємо, чи однакова кількість властивостей
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true; // Якщо всі властивості збігаються, повертаємо true
}

// Виконання другого завдання
function secondTask() {
    let personA = { letter: 'x', value: 9 };
    let personB = { value: 9, letter: 'x' };

    console.log("Наступне завдання");
    let isEqual = areObjectsEqual(personA, personB);
    console.log("Object A:", personA);
    console.log("Object B:", personB);
    console.log(`Are they identical? ${isEqual}`);
}

// Функція для перевірки, чи число знаходиться в заданому діапазоні
function checkInRange(range, num) {
    return num >= range[0] && num <= range[1];
}

// Виконання третього завдання
function thirdTask() {
    let number = 45;
    let rangeLimits = [30, 60];
    console.log("Наступне завдання");
    console.log(`Number: ${number}\nRange: from ${rangeLimits[0]} to ${rangeLimits[1]}`);
    console.log(`Is in range: ${checkInRange(rangeLimits, number)}`);
}

// Виконання четвертого завдання (Логічний оператор NOT)
function fourthTask() {
    let status = false;
    console.log("Наступне завдання");
    console.log(`Initial value (boolean): ${status}`);
    console.log(`Inverted value (not boolean): ${!status}`);
}

// Функція для конвертації оцінки у словесний формат через if
function gradeToMessageIf(grade) {
    if (grade < 0 || grade > 100) return 'Invalid grade'; // Перевірка на валідність оцінки
    if (grade < 50) return 'Failed';
    if (grade < 70) return 'Satisfactory';
    if (grade < 90) return 'Good work!';
    return 'Excellent!';
}

// Функція для конвертації оцінки у словесний формат через тернарний оператор
function gradeToMessageTernary(grade) {
    return grade < 0 || grade > 100 ? 'Invalid grade' :
        grade < 50 ? 'Failed' :
            grade < 70 ? 'Satisfactory' :
                grade < 90 ? 'Good work!' : 'Excellent!';
}

// Виконання п'ятого завдання
function fifthTask() {
    let grade = 85;
    console.log("Наступне завдання");
    console.log(`Grade: ${grade}`);
    console.log(`Feedback (if): ${gradeToMessageIf(grade)}`);
    console.log(`Feedback (ternary): ${gradeToMessageTernary(grade)}`);
}

// Функція для визначення сезону за місяцем через if
function getMonthSeasonIf(month) {
    let monthList = {
        winter: ["dec", "jan", "feb"],
        spring: ["mar", "apr", "may"],
        summer: ["jun", "jul", "aug"],
        autumn: ["sep", "oct", "nov"]
    };

    month = month.toLowerCase(); // Перетворюємо в нижній регістр
    if (monthList.winter.includes(month)) return 'Winter';
    if (monthList.spring.includes(month)) return 'Spring';
    if (monthList.summer.includes(month)) return 'Summer. LET\'S GO TO THE BEACH';
    if (monthList.autumn.includes(month)) return 'Autumn';
    return 'Invalid month';
}

// Функція для визначення сезону за місяцем через тернарний оператор
function getMonthSeasonTernary(month) {
    let monthGroups = {
        winter: ["dec", "jan", "feb"],
        spring: ["mar", "apr", "may"],
        summer: ["jun", "jul", "aug"],
        autumn: ["sep", "oct", "nov"]
    };
    month = month.toLowerCase();

    return monthGroups.winter.includes(month) ? 'Winter' :
        monthGroups.spring.includes(month) ? 'Spring' :
            monthGroups.summer.includes(month) ? 'Summer. LET\'S GO TO THE BEACH' :
                monthGroups.autumn.includes(month) ? 'Autumn' :
                    'Invalid month';
}

// Виконання шостого завдання
function sixthTask() {
    let monthInput = "jan";
    console.log("Наступне завдання");
    console.log(`Month: ${monthInput}`);
    console.log(`Season (if): ${getMonthSeasonIf(monthInput)}`);
    console.log(`Season (ternary): ${getMonthSeasonTernary(monthInput)}`);
}

// Виконання всіх завдань
firstTask();
secondTask();
thirdTask();
fourthTask();
fifthTask();
sixthTask();

// Завдання 1: Сума перших 10 чисел Фібоначчі (цикл while)
function fibonacciSum() {
    let a = 0, b = 1, sum = 0, count = 0;
    while (count < 10) { // Виконуємо цикл, доки count не досягне 10
        sum += a;
        [a, b] = [b, a + b];
        count++;
    }
    console.log("Завдання 1")
    console.log(`Сума перших 10 чисел Фібоначчі: ${sum}`);
}
fibonacciSum();


// Завдання 2: Сума всіх простих чисел від 1 до 1000 (цикл for)
function sumPrimes() {
    let sum = 0; // Ініціалізуємо змінну для суми
    for (let num = 2; num <= 1000; num++) { // Проходимо по всіх числах від 2 до 1000
        let isPrime = true; // Початково припускаємо що число є простим
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break; // Припиняємо перевірку, якщо знайдено дільник
            }
        }
        if (isPrime) sum += num; // Якщо число просте, додаємо його до суми
    }
    console.log("Завдання 2");
    console.log(`Сума простих чисел від 1 до 1000: ${sum}`);
}
sumPrimes();


// Завдання 3: Визначення дня тижня за введеним числом (конструкція switch)
function getDayOfWeek() {
    let dayNumber = prompt("Введіть число від 1 до 7 для дня тижня: ");
    console.log("Завдання 3");
    switch (parseInt(dayNumber)) { // Перетворюємо введене значення у число і перевіряємо у switch
        case 1:
            console.log("Понеділок");
            break;
        case 2:
            console.log("Вівторок");
            break;
        case 3:
            console.log("Середа");
            break;
        case 4:
            console.log("Четвер");
            break;
        case 5:
            console.log("П'ятниця");
            break;
        case 6:
            console.log("Субота");
            break;
        case 7:
            console.log("Неділя");
            break;
        default:
            console.log("Неправильне число");
    }
}
getDayOfWeek();


// Завдання 4: Фільтрація рядків з непарною довжиною
function filterOddLengthStrings(arr) {
    console.log("Завдання 4")
    return arr.filter(str => str.length % 2 !== 0); // Фільтруємо масив, залишаючи лише рядки з непарною довжиною
}
console.log(filterOddLengthStrings(["Всьо", "Парта", "Ручка", "Олівець", "Ось", "І", "Нам", "Прийшов", "Кінець"]));


// Завдання 5: Збільшення чисел у масиві на 1 (стрілкова функція)
const increaseNumbers = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) { // Проходимося по всіх елементах масиву
        result.push(arr[i] + 1); // Додаємо до нового масиву кожен елемент, збільшений на 1
    }
    console.log("Завдання 5");
    return result;
}
console.log(increaseNumbers([1, 2, 3, 4, 5]));


// Завдання 6: Перевірка, чи сума або різниця двох чисел дорівнює 10
function isSumOrDifferenceTen(a, b) {
    return a + b === 10 || a - b === 10; // Перевіряємо, чи сума або різниця дорівнює 10
}
console.log("Завдання 6");
console.log(isSumOrDifferenceTen(7, 3)); // Перевіряємо пару чисел (7,3)
console.log(isSumOrDifferenceTen(12, 5));

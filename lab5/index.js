// Завдання: Керування лампою
const checkbox = document.getElementById("lamp-power"); // (вмикач лампи)
let lamp = document.getElementById("lamp-picture");
let hint = document.getElementById("lamp-hint"); // (вивід помилок/повідомлень)

// Функція отримання вибраного типу лампи
function getLampType() {
    const selected = document.querySelector('input[name="lamp-type"]:checked');
    return selected.id;
}


checkbox.addEventListener("change", (e) => {
    let lampType = getLampType();

    hint.style.display = "none";

    if (checkbox.checked) { // Якщо лампа вмикається
        if (lampType === "regular-lamp") { // Якщо обрано звичайну лампу
            let power = prompt('Please select a power of light ("Regular" or "Full"): ');
            if (power.toLowerCase().trim() === "regular") {
                lamp.className = "lamp1-on";
            }
            else if (power.toLowerCase().trim() === "full") {
                lamp.className = "lamp1-full"; // Встановлюємо клас "звичайна лампа, повне світло"
            }
            else {
                lamp.className = "lamp1-off";
                hint.textContent = "Incorrect power.";
                hint.style.display = "block";
            }
        }
        else if (lampType === "cool-lamp") {
            lamp.className = "lamp2-on";
        }
        else if (lampType === "omg-lamp") {
            lamp.className = "lamp3-on";
        }
    } else { // Якщо лампу вимикають
        if (lampType === "regular-lamp") {
            lamp.className = "lamp1-off";
        }
        else if (lampType === "cool-lamp") {
            lamp.className = "lamp2-off";
        }
        else if (lampType === "omg-lamp") {
            lamp.className = "lamp3-off";
        }
    }
})

// Таймер неактивності
let inactivityTime = 10000; // 10 секунд
let timeout;

function resetTimer() {
    clearTimeout(timeout); // Скидаємо попередній таймер
    timeout = setTimeout(() => { // Створюємо новий таймер
        lampType = getLampType();
        if (lampType === "regular-lamp") {
            lamp.className = "lamp1-off";
        }
        else if (lampType === "cool-lamp") {
            lamp.className = "lamp2-off";
        }
        else if (lampType === "omg-lamp") {
            lamp.className = "lamp3-off";
        }
        hint.textContent = "Switch off!";
        hint.style.display = "block";
    }, inactivityTime);
}

// Реєструємо активність користувача
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
document.addEventListener("scroll", resetTimer);

resetTimer(); // Запускаємо таймер одразу

// --- СВІТЛОФОР ---

let redTime = 5; // Час червоного
let yellowTime = 3; // Час жовтого
let greenTime = 7; // Час зеленого

let currentState = "red"; // Початковий стан

// Отримуємо елементи світлофора
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const statusDiv = document.getElementById("status");

// Змінюємо активне світло
function changeLight(state) {
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");

    if (state === "red") {
        redLight.classList.add("active");
        statusDiv.textContent = "Червоний";
    } else if (state === "yellow") {
        yellowLight.classList.add("active");
        statusDiv.textContent = "Жовтий";
    } else if (state === "green") {
        greenLight.classList.add("active");
        statusDiv.textContent = "Зелений";
    }
}

// Почати автоматичну зміну світла
function startTrafficLight() {
    changeLight("red");
    setTimeout(() => {
        changeLight("yellow");
        setTimeout(() => {
            changeLight("green");
            setTimeout(() => {
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        yellowLight.classList.toggle("active"); // Мигання жовтим
                    }, i * 500);
                }
                setTimeout(() => {
                    changeLight("red");
                }, 1500);
            }, greenTime * 1000);
        }, yellowTime * 1000);
    }, redTime * 1000);
}

// Кнопка запуску автоматичного світлофору
document.getElementById("startBtn").addEventListener("click", function() {
    startTrafficLight();
});

// Кнопка ручного перемикання
document.getElementById("nextBtn").addEventListener("click", function() {
    if (currentState === "red") {
        currentState = "yellow";
        changeLight("yellow");
    } else if (currentState === "yellow") {
        currentState = "green";
        changeLight("green");
    } else if (currentState === "green") {
        currentState = "red";
        changeLight("red");
    }
});

// Кнопка налаштування тривалості світлофора
document.getElementById("setTimesBtn").addEventListener("click", function() {
    let redInput = prompt("Введіть тривалість червоного світла (секунди):", redTime);
    let yellowInput = prompt("Введіть тривалість жовтого світла (секунди):", yellowTime);
    let greenInput = prompt("Введіть тривалість зеленого світла (секунди):", greenTime);

    if (redInput && !isNaN(redInput) && redInput > 0) {
        redTime = parseInt(redInput);
    }
    if (yellowInput && !isNaN(yellowInput) && yellowInput > 0) {
        yellowTime = parseInt(yellowInput);
    }
    if (greenInput && !isNaN(greenInput) && greenInput > 0) {
        greenTime = parseInt(greenInput);
    }

    alert(`Нова тривалість: червоний - ${redTime} сек, жовтий - ${yellowTime} сек, зелений - ${greenTime} сек`);
});

// --- ГОДИННИК ---

function updateClock() {
    const clock = document.getElementById('clock'); // Отримуємо елемент годинника
    const now = new Date(); // Поточна дата
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    clock.innerHTML = `${hours}:${minutes}:<span class="blink">${seconds}</span>`; // Виводимо час
}

setInterval(updateClock, 1000); // Оновлюємо щосекунди

// --- ТАЙМЕР ДО ДАТИ ---

document.getElementById('startTimerBtn').addEventListener('click', function() {
    const endDate = new Date(document.getElementById('timerInput').value);
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            countdownElement.innerHTML = "Таймер завершено!";
            clearInterval(countdownInterval);
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
            const minutes = Math.floor(timeLeft / (1000 * 60)) % 60;
            const seconds = Math.floor(timeLeft / 1000) % 60;
            countdownElement.innerHTML = `${days} днів, ${hours} год. ${minutes} хв. ${seconds} сек.`;
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

// --- ЗВОРОТНІЙ ВІДСЛІК ДО ДНЯ НАРОДЖЕННЯ ---

document.getElementById('countdownBirthdayBtn').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthdayInput').value;
    const birthday = new Date(birthdayInput);

    if (birthday === "Invalid Date" || !birthdayInput) {
        alert("Введіть правильну дату!");
        return;
    }

    const now = new Date();
    const timeLeft = birthday - now;

    if (timeLeft <= 0) {
        document.getElementById('birthdayCountdown').innerHTML = "Вже святкували!";
    } else {
        const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) % 30;
        const hours = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(timeLeft / (1000 * 60)) % 60;
        const seconds = Math.floor(timeLeft / 1000) % 60;

        document.getElementById('birthdayCountdown').innerHTML =
            `${months} місяців, ${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
    }
});

// --- ПРОДУКТИ І ЗАМОВЛЕННЯ ---

const products = new Map(); //  продуктів
const orders = new Set(); // Набір замовлень
const productHistory = new WeakMap(); // Історія змін продуктів
const users = new WeakSet();

// Додавання продукту
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);

    if (name && !isNaN(price) && !isNaN(stock)) {
        const id = Date.now();
        products.set(id, { name, price, stock });
        console.log(`Продукт ${name} додано у каталог.`);
    } else {
        console.log('Будь ласка, введіть коректні дані.');
    }
}

// Пошук продукту
function searchProduct() {
    const searchName = document.getElementById('searchName').value;
    for (let [id, product] of products) {
        if (product.name.toLowerCase().includes(searchName.toLowerCase())) {
            console.log(`Продукт знайдено: ${product.name}, Ціна: ${product.price}, Кількість: ${product.stock}`);
        }
    }
}

// Оновлення продукту
function updateProduct() {
    const name = document.getElementById('updateName').value;
    const price = parseFloat(document.getElementById('updatePrice').value);
    const stock = parseInt(document.getElementById('updateStock').value);

    for (let [id, product] of products) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            product.price = price;
            product.stock = stock;
            console.log(`Продукт ${name} оновлено.`);
            break;
        }
    }
}

// Видалення продукту
function deleteProduct() {
    const name = document.getElementById('deleteName').value;

    for (let [id, product] of products) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            products.delete(id);
            console.log(`Продукт ${name} видалено.`);
            break;
        }
    }
}

// Оформлення замовлення
function makeOrder() {
    const name = document.getElementById('orderName').value;
    const quantity = parseInt(document.getElementById('orderQuantity').value);

    for (let [id, product] of products) {
        if (product.name.toLowerCase() === name.toLowerCase()) {
            if (product.stock >= quantity) {
                product.stock -= quantity;
                orders.add({ product: product.name, quantity });
                console.log(`Замовлення на ${quantity} одиниць продукту ${name} оформлено.`);
            } else {
                console.log('Не вистачає товару на складі.');
            }
            break;
        }
    }
}

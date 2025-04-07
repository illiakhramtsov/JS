// Отримуємо всі елементи, які мають клас "block-to-check"
let elements = document.getElementsByClassName("block-to-check");
console.log(elements); // Виводимо список знайдених елементів у консоль

// Функція, яка викликає помилку з повідомленням
function throwError() {
    throw new Error("Illya Khramtsov");
}

// Додаємо обробник події "mouseout" для кожного знайденого елемента
for (let element of elements) {
    element.addEventListener("mouseout", () => {
        console.log("Hello, world!"); // Виводимо повідомлення в консоль
        element.textContent = "Illya Khramtsov"; // Замінюємо текст у елементі на цей
    });
}

// Получаем кнопку "Оформить заказ"
const mainButtons = document.querySelectorAll('.mainButton');

// Получаем контейнеры, в которых находятся кнопки "Оформить заказ" и счетчик
const buttonContainers = document.querySelectorAll('.buttonContainer');

// Получаем кнопки увеличения и уменьшения количества товара
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');

// Получаем значения счетчиков
const counterValues = document.querySelectorAll('.counterValue');

// Добавляем обработчик события клика на кнопку "Оформить заказ"
mainButtons.forEach((mainButton, index) => {
    mainButton.addEventListener("click", () => {
        // Скрываем кнопку "Оформить заказ"
        buttonContainers[index].style.display = "none";

        // Показываем контейнер с кнопками увеличения и уменьшения количества товара
        document.querySelectorAll('.counterButton')[index].classList.remove("d-none");
    });
});

// Добавляем обработчики событий клика на кнопки увеличения и уменьшения количества товара
decrementButtons.forEach((decrementButton, index) => {
    decrementButton.addEventListener("click", () => {
        // Уменьшаем значение счетчика на 1, если оно больше 1
        let value = parseInt(counterValues[index].innerText);
        if (value > 1) {
            counterValues[index].innerText = (value - 1).toString();
        } else {
            // Если значение счетчика достигло 0, скрываем контейнер с кнопками увеличения и уменьшения
            document.querySelectorAll('.counterButton')[index].classList.add("d-none");
            // Показываем кнопку "Оформить заказ"
            buttonContainers[index].style.display = "flex";
        }
    });
});

incrementButtons.forEach((incrementButton, index) => {
    incrementButton.addEventListener("click", () => {
        // Увеличиваем значение счетчика на 1
        let value = parseInt(counterValues[index].innerText);
        counterValues[index].innerText = (value + 1).toString();
    });
});

// Получаем все кнопки с классом "btn-save"
const saveButtons = document.querySelectorAll('.btn-save');

// Для каждой кнопки добавляем обработчик события
saveButtons.forEach(button => {
    // Получаем изображение внутри текущей кнопки
    const saveImage = button.querySelector('.img-save');

    // Добавляем обработчик события клика на кнопку
    button.addEventListener('click', () => {
        // Переключаем между изображениями
        if (saveImage.getAttribute('src') === 'img/heart-outline.svg') {
            // Если текущее изображение - пустое сердце, заменяем его на закрашенное
            saveImage.setAttribute('src', 'img/heart-fill.svg');
        } else {
            // Если текущее изображение - закрашенное сердце, заменяем его на пустое
            saveImage.setAttribute('src', 'img/heart-outline.svg');
        }
    });
});

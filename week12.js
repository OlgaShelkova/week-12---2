// Функция для вычисления ИМТ
function calculateBMI(weight, height) {
    // Возвести рост в квадрат
    const heightSquared = Math.pow(height, 2);

    // Рассчитать ИМТ
    const bmi = weight / heightSquared;

    // Округлить результат ИМТ до двух десятичных знаков
    return Math.round(bmi * 100) / 100;
}

const bmiForm = document.getElementById("bmiForm"); 
const weightInput = document.getElementById("weight"); 
const heightInput = document.getElementById("height");
const resultElement = document.getElementById("result");
const recommendation = document.getElementById('recommendation');

bmiForm.addEventListener("submit", function(event) {// Добавляем слушатель события submit на форму с id "bmiForm". Когда форма отправляется, будет вызываться функция-обработчик
    event.preventDefault(); // Предотвращаем отправку формы, чтобы страница не перезагружалась
    
    const weight = +weightInput.value; // Получаем значение веса из поля ввода с id "weightInput" Преобразуем его в число 
    const height = +heightInput.value; // Получаем значение веса из поля ввода с id "weightInput" Преобразуем его в число 

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) { // Проверяем, что значение веса и роста являются числами и больше нуля
    const bmi = calculateBMI(weight, height); // Вызываем функцию calculateBMI() для расчета ИМТ. Передаем значения веса и роста 
    resultElement.textContent = + bmi; // Выводим результат на экран в элемент с id "resultElement"
    
    if (bmi < 18.5) {
        recommendation.textContent = "Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        recommendation.textContent = "Нормальный вес. Ваш вес соответствует нормальным показателям.";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        recommendation.textContent = "Избыточный вес. Рекомендуется контролировать питание и заниматься физическими упражнениями.";
    } else if (bmi >= 29.9 && bmi < 34.9) {
        recommendation.textContent = "Ожирение первой степени. Рекомендуется проконсультироваться с врачом и разработать план для снижения веса.";
    } else if (bmi >= 34.9 && bmi < 39.9) {
        recommendation.textContent = "Ожирение второй степени. Рекомендуется немедленно проконсультироваться с врачом и принять меры для снижения веса.";
    } else {
        recommendation.textContent = "Ожирение третьей степени. Рекомендуется немедленно обратиться к врачу для получения специализированной помощи.";
    }
    } else {
      resultElement.textContent = "Пожалуйста, введите корректные значения веса и роста.";
      recommendation.textContent = "";
    }
  });
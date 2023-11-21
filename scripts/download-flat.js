'use-strict';



// получение ссылки на необходимые элементы страницы

const uploadButton = document.getElementById("upload-button");
const imageContainer = document.getElementById("image-container");

// добавление обработчика события для клика на кнопку

uploadButton.addEventListener("click", function() {
    // создание элемента инпут для загрузки изображения
    const fileInput = document.createElement("input");
    fileInput.type = "file";

    // назначаем обработчик события выбора файла
    fileInput.addEventListener("change", function(e, event) {
            const file = e.target.files[0];
            // создаем объект файлридер для чтения файла
            const reader = new FileReader();
            reader.onload = function() {

   // создание элемента изображения и установливаем атрибуты используя данные изображения
   const imageElement = document.createElement("img");
    imageElement.src = reader.result;
    imageElement.alt = file.name;

    // очищаем контейнер от предыдущего изображения и вставляем новое

    imageContainer.innerHTML = "";
    imageContainer.appendChild(imageElement);
}
    // читаем содержимое выбранного файла в формате Дата урл
    reader.readAsDataURL(file);
 });

    // кликаем на input элемент чтобы открыть диалоговое окно выбора файла

        fileInput.click();
    });




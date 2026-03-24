/* =====================================
   МАССИВ ИГРОВЫХ ЧАСОВ
===================================== */

var hours = [3, 5, 2, 6, 4];


/* =====================================
   СУММА ЧАСОВ
===================================== */

function sumHours(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


/* =====================================
   СКОЛЬКО СЕССИЙ БОЛЬШЕ 4 ЧАСОВ
===================================== */

function countLongSessions(arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 4) {
            count++;
        }

    }

    return count;
}


/* =====================================
   СУММА КВАДРАТОВ ЧАСОВ
===================================== */

function sumSquares(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i] * arr[i];

    }

    return sum;
}


/* =====================================
   ВЫВОД СТАТИСТИКИ
===================================== */

function calculateStats() {

    var result =
        "Игровые часы: " + hours + "<br>" +
        "Общее количество часов: " + sumHours(hours) + "<br>" +
        "Сессий больше 4 часов: " + countLongSessions(hours) + "<br>" +
        "Сумма квадратов часов: " + sumSquares(hours);

    document.getElementById("result").innerHTML = result;

}



/* =====================================
   ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ
===================================== */

//Работа с объектом Document
window.addEventListener("DOMContentLoaded", function () {

    console.log("=== ИНФОРМАЦИЯ О СТРАНИЦЕ ===");


    /* ---------------------------
       ВСЕ ССЫЛКИ
    --------------------------- */

    console.log("Ссылки:");

    for (var i = 0; i < document.links.length; i++) {
        console.log(document.links[i].href);
    }


    /* ---------------------------
       ВСЕ ИЗОБРАЖЕНИЯ
    --------------------------- */

    console.log("Изображения:");

    for (var i = 0; i < document.images.length; i++) {
        console.log(document.images[i].src);
    }


    /* ---------------------------
       ВСЕ ЯКОРЯ
    --------------------------- */

    console.log("Якоря:");

    for (var i = 0; i < document.anchors.length; i++) {
        console.log(document.anchors[i].name);
    }



    /* =====================================
       ОБРАБОТЧИКИ СОБЫТИЙ
    ===================================== */


    /* КНОПКА СТАТИСТИКИ */

    var statButton = document.getElementById("statsBtn");

    statButton.addEventListener("click", function () {
        console.log("Нажата кнопка 'Показать статистику'");
    });



    /* НАВЕДЕНИЕ НА ИЗОБРАЖЕНИЕ */

    var img = document.querySelector("#about img");

    if (img) {

        img.addEventListener("mouseover", function () {

            console.log("Навели курсор на изображение клуба");

        });

    }



    /* ВВОД В ПОЛЕ ПОИСКА */

    var search = document.querySelector("input[type='text']");

    if (search) {

        search.addEventListener("keyup", function () {

            console.log("Пользователь вводит текст: " + search.value);

        });

    }


});



/* =====================================
   ПРОСТАЯ АНИМАЦИЯ КАРТИНОК
===================================== */

var images = [
    "images/2.jpg",
    "images/1.jpg",
    "images/3.webp"
];

//Переменная для текущей картинки.
var index = 0;

function changeImage() {

    var img = document.querySelector("#about img");

    if (!img) return;

    index++;

    if (index >= images.length) {
        index = 0;
    }

    img.src = images[index];

}


/* СМЕНА КАРТИНКИ КАЖДЫЕ 4 СЕК */

setInterval(changeImage, 4000);
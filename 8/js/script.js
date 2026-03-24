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

window.addEventListener("DOMContentLoaded", function () {

console.log("=== ИНФОРМАЦИЯ О СТРАНИЦЕ ===");


console.log("Ссылки:");

for (var i = 0; i < document.links.length; i++) {
    console.log(document.links[i].href);
}


console.log("Изображения:");

for (var i = 0; i < document.images.length; i++) {
    console.log(document.images[i].src);
}


console.log("Якоря:");

for (var i = 0; i < document.anchors.length; i++) {
    console.log(document.anchors[i].name);
}



var statButton = document.getElementById("statsBtn");

if (statButton) {
    statButton.addEventListener("click", function () {
        console.log("Нажата кнопка 'Показать статистику'");
    });
}



var img = document.querySelector("#about img");

if (img) {

    img.addEventListener("mouseover", function () {

        console.log("Навели курсор на изображение клуба");

    });

}



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

setInterval(changeImage, 4000);




/* =====================================
РАБОТА С ОБЪЕКТАМИ
===================================== */

console.log("=== ОБЪЕКТЫ ===");

//через литерал
var player = {
name: "Alex",
level: 12,
hoursPlayed: 120
};

console.log("Игрок:", player);

//второй способ
var club = new Object();

club.name = "Cyber Club";
club.city = "Helsinki";
club.pcs = 40;

console.log("Клуб:", club);

console.log("Имя игрока:", player.name);
console.log("Уровень игрока:", player["level"]);

player.level = 13;
console.log("Новый уровень:", player.level);

player.rank = "Diamond";
console.log("Ранг игрока:", player.rank);




/* =====================================
КОНСТРУКТОР
===================================== */

//собственный объект
function Game(title, players) {

this.title = title;
this.players = players;

//Методы объекта, возвращает
this.info = function () {
    return "Игра: " + this.title + ", игроков: " + this.players;
};

}

//общий метод для game, методы объекта
Game.prototype.popular = function () {

if (this.players > 20) {
    return this.title + " — популярная игра";
} else {
    return this.title + " — обычная игра";
}

};

var game1 = new Game("Valorant", 10);
var game2 = new Game("GTA 5", 30);

console.log(game1.info());
console.log(game2.info());

console.log(game1.popular());
console.log(game2.popular());




/* =====================================
РАСШИРЕНИЕ встроенного типа ARRAY
===================================== */

//Добавляем функцию среднего значения массива
Array.prototype.average = function () {

var sum = 0;

for (var i = 0; i < this.length; i++) {
    sum += this[i];
}

return sum / this.length;

};

var scores = [5, 8, 9, 6, 7];

console.log("Средний результат:", scores.average());
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

//function calculateStats() {
//
//var result =
//    "Игровые часы: " + hours + "<br>" +
//    "Общее количество часов: " + sumHours(hours) + "<br>" +
//    "Сессий больше 4 часов: " + countLongSessions(hours) + "<br>" +
//    "Сумма квадратов часов: " + sumSquares(hours);
//
//document.getElementById("result").innerHTML = result;
//
//}

/* =====================================
ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ
===================================== */

$(document).ready(function () {

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



$("#statsBtn").click(function () {

    console.log("Нажата кнопка 'Показать статистику'");

});



$("#about img").mouseover(function () {

console.log("Навели курсор на изображение клуба");

});



$("input[type='text']").keyup(function () {

console.log("Пользователь вводит текст: " + $(this).val()); //получить значение input.

});

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

/* =====================================
ДИНАМИЧЕСКОЕ ИЗМЕНЕНИЕ DOM
===================================== */

//window.addEventListener("DOMContentLoaded", function () {
$(function () {

    // 1. Выбор элементов разными способами работает как CSS-селектор.
    $("#gamesBody")
    $("#addGameBtn")
    $("input[type='text']")

    // 2. Добавление игры
    $("#addGameBtn").click(function () {

    var gameName = prompt("Введите название игры:");

    if (!gameName) return;

    $("#gamesBody").append("<tr><td>" + gameName + "</td></tr>");

    });

    // 3. Удаление последней игры
    $("#removeGameBtn").click(function () {

    $("#gamesBody tr:last").remove();

    });

});

/* =====================================
ОТКРЫТИЕ КАРТИНКИ НА ПОЛНЫЙ ЭКРАН
===================================== */

var preview = document.querySelector("#about img");

preview.addEventListener("click", function () {

    // создаём затемнение
    var overlay = document.createElement("div");
    overlay.className = "image-overlay";

    // создаём большую картинку
    var bigImage = document.createElement("img");
    bigImage.src = preview.src;

    overlay.appendChild(bigImage);

    // добавляем поверх страницы
    document.body.appendChild(overlay);

    // закрытие по клику
    overlay.addEventListener("click", function () {
        overlay.remove();
    });

});


/* =====================================
РАБОТА С ФОРМОЙ
===================================== */

window.addEventListener("DOMContentLoaded", function () {

//Получение формы через объект Form
var form = document.forms["bookingForm"];
var submitBtn = document.getElementById("submitBtn");

var nameInput = form.username;
var passwordInput = form.password;
var gameSelect = form.game;
var comment = form.comment;

/* =====================
ЗАВИСИМОСТЬ ЭЛЕМЕНТОВ
Комментарий доступен
только если выбрана игра
===================== */

//comment.disabled = true;
$("textarea[name='comment']").prop("disabled", true);

$("select[name='game']").change(function () {

if ($(this).val() !== "") {

$("textarea[name='comment']").prop("disabled", false);

} else {

$("textarea[name='comment']").prop("disabled", true);

}

});


/* =====================
ИЗМЕНЕНИЕ СТИЛЯ КНОПКИ
===================== */

form.addEventListener("input", function () {

if (nameInput.value && passwordInput.value) {

submitBtn.style.background = "lime";
submitBtn.style.color = "black";

} else {

submitBtn.style.background = "";
submitBtn.style.color = "";

}

});


/* =====================
ПРОВЕРКА ФОРМЫ
===================== */

$("#bookingForm").submit(function (event) {

event.preventDefault(); // чтобы отменить стандартную отправку формы.

var name = $("input[name='username']").val();
var password = $("input[name='password']").val();
var game = $("select[name='game']").val();

if (!name) {
alert("Введите имя");
return;
}

if (password.length < 4) {
alert("Пароль минимум 4 символа");
return;
}

if (!game) {
alert("Выберите игру");
return;
}

console.log("Форма отправлена");

/* =====================
СБОР ДАННЫХ В ОБЪЕКТ
===================== */

var data = {

name: $("input[name='username']").val(),
password: $("input[name='password']").val(),
seat: $("input[name='seat']:checked").val(),
snacks: $("input[name='snacks']").prop("checked"),
drink: $("input[name='drink']").prop("checked"),
game: $("select[name='game']").val(),
comment: $("textarea[name='comment']").val()

};

console.log("Данные формы:", data);

});

});


/* =====================================
JQUERY АНИМАЦИЯ УСЛУГ
===================================== */

jQuery.fx.speeds.turtle = 400;

$("#services").hide();

$("#servicesBtn").click(function(){

$("#services").slideToggle("turtle");

});

//--------------

$("#equipment img").hover(function(){

$(this).fadeTo(100, 0.4);

}, function(){

$(this).fadeTo(100, 1);

});

$("#about img").hover(

function(){

$(this).animate({
marginLeft: "10px"
},300);

},

function(){

$(this).animate({
marginLeft: "0px"
},300);

}

);

// массив игровых часов
var hours = [3, 5, 2, 6, 4];


// сумма часов
function sumHours(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// сколько раз игрок играл больше 4 часов(подсчет кол-ва значений)
function countLongSessions(arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 4) {
            count++;
        }

    }

    return count;
}


// сумма квадратов часов(вычисление суммы квадратов элементов)
function sumSquares(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i] * arr[i];

    }

    return sum;
}


// вывод результатов
function calculateStats() {

    var result =
    "Игровые часы: " + hours + "<br>" +
    "Общее количество часов: " + sumHours(hours) + "<br>" +
    "Сессий больше 4 часов: " + countLongSessions(hours) + "<br>" +
    "Сумма квадратов часов: " + sumSquares(hours);

    document.getElementById("result").innerHTML = result;

}
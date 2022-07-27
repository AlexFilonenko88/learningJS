// требуется сразу обратить внимание на тип переменной - она может быть, как вещественная (с плавающей запятой), так и целой.
//     Выводом является результат выполнения функции, либо логгирование результирующего значения "console.log()" Весь код выполняется в строгом режиме "use strict"; [a]: https://learn.javascript.ru/strict-mode "strict-mode"
//
//     1)Арифметические операции
// Все входные и выходные данные в заданиях этой группы являются целыми числами.
// Все числа, для которых указано количество цифр (двузначное число, трехзначное число и т. д.), считаются положительными.

//     Integer19 .
//     С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.

const numberMinutes = function (seconds) {
    return Math.round(seconds / 60);
}

// console.log(numberMinutes(19888));

//     Integer20
// С начала суток прошло N секунд (N — целое). Найти количество полных часов, прошедших с начала суток.

const numberHours = function (seconds){
    return Math.round((seconds / 60) / 60);
};

// console.log(numberHours(Math.random()*100000));

//     Integer21
// С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последней минуты.

const quantitySeconds = function (seconds){
    const r = seconds / 60;
    return r - Math.floor(r);
}

// console.log(quantitySeconds(1505960));

//     Integer22
// С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последнего часа.

const numberSecondsLastHour = function (seconds){
    return seconds % 3600;
}

// console.log(numberSecondsLastHour(87297));

//     Integer23
// С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала последнего часа.

const numberMinutesLastHour = function (seconds){
    const w = (seconds / 60) / 60;
    const q = w - Math.floor(w);
    return `Прошло ${q} минут с последнего часа`;
};

// console.log(numberMinutesLastHour(Math.random()*10000));

// 3)Логические выражения
// Во всех заданиях данной группы требуется вывести логическое значение TRUE,
// если приведенное высказывание для предложенных исходных данных является истинным,
// и значение FALSE в противном случае. Все числа, для которых указано количество цифр
// (двузначное число, трехзначное число и т. д.), считаются целыми положительными.
//
//     Boolean25
// Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) ??? лежит во второй координатной четверти ???».

function Boolean25 (x, y){
    if(x > 0 && y > 0){
        return true;
    };

    return false;
}

// console.log(Boolean25(1, 4));


// Boolean26
// Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит в четвертой координатной четверти».

function Boolean26 (x, y){
    if(x > 0 && y < 0) {
        return true;
    };

    return false;
}

// console.log(Boolean26(1, -6))

// Boolean27
// Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй или третьей координатной четверти».

function Boolean27 (x, y){
    if(x < 0 && y > 0){
        return true;
    }
    if(x < 0 && y < 0){
        return true;
    }

    return false;
}

// console.log(Boolean27(1, 5));

// Boolean28
// Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит в первой или третьей координатной четверти».

function Boolean28(x, y){
    if(x > 0 && y > 0){
        return true;
    }
    if(x < 0 && y < 0) {
        return true;
    }

    return false;
}

// console.log(Boolean28(1, 5));

// 4)Условный оператор
// Во всех заданиях данной группы требуется вывести логическое значение TRUE,
// если приведенное высказывание для предложенных исходных данных является истинным,
// и значение FALSE в противном случае.
// Все числа, для которых указано количество цифр (двузначное число, трехзначное число и т. д.), считаются целыми положительными.
//
//     If17.
//     Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию или убыванию, то удвоить их;
//     в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C.

function If17(A, B, C){
    if(A > B && B > C){
        return `${A * 2} ${B * 2} ${C * 2}`;
    }
    if(A < B && B < C){
        return `${A * 2} ${B * 2} ${C * 2}`;
    }

    return `${-A} ${-B} ${-C}`;
};

// console.log(If17(3,2,1));

//     If18.
//     Даны три целых числа, одно из которых отлично от двух других, равных между собой. Определить порядковый номер числа, отличного от остальных.

function If18(array){
    // if(A !== B && A !== C){
    //     return A;
    // }

    for(let i = 0; i <= array.length; i += 1){
        // if(array[0] !== array[1] && array[0] !== array[2]){
        //     return array[0];
        // }
        // if(array[1] !== array[2] && array[1] !== array[0]){
        //     return array[1];
        // }
        // if(array[2] !== array[0] && array[2] !== array[1]){
        //     return array[2];
        // }

        // if(array[i] !== array[i + 1] && array[i] !== array[i + 2]){
        //     return array[i];
        // }
    }
}

// console.log(If18(1, 3,3));
// console.log(If18([3, 3, 4]));

//     If19.
//     Даны четыре целых числа, одно из которых отлично от трех других, равных между собой. Определить порядковый номер числа, отличного от остальных.

function If19(array) {
    if(array[0] !== array[1] && array[0] !== array[2] && array[0] !== array[3]){
        return array[0];
    }
    if(array[1] !== array[0] && array[1] !== array[2] && array[1] !== array[3]){
        return array[1];
    }
    if(array[2] !== array[0] && array[2] !== array[1] && array[2] !== array[3]){
        return array[2];
    }
    if(array[3] !== array[0] && array[3] !== array[1] && array[3] !== array[2]){
        return array[3];
    }
}

// console.log(If19([1,1,3,1]));

// 4) Цикл с параметром (for)
//     For1.
//         Даны целые числа K и N (N > 0). Вывести N раз число K.

function For1(K, N){
    for(let i = 0; i <= N; i ++){
        console.log(K);
    }
};

// console.log(For1(2, 3));

//     For2.
//     Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел.

function For2(A, B){
    let array = [];

    for(let i = A; i <= B; i ++){
        console.log(i)
        array.push(i);
    }

    return array.length;
}

// console.log(For2(1, 3));

//     For3.
//     Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел.

function For3 (A, B){
    for (let i = A; i <= B; i++){
        if(i !== A && i !== B){
            console.log(i);
        }
    }
}

// console.log(For3(2,5));

//     For4.
//     Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, ..., 10 кг конфет.

function For4 (price){
    for(let i = 1; i <= 10; i++){
        console.log(price * i);
    }
}

// console.log(For4(2));

//     For5 .
//     Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфет.

function For5 (price){
    for(let i = 0.1; i <= 1; i += 0.1){
        console.log(price * i);
    }
}

// console.log(For5(2));
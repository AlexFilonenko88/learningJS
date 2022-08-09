// # 1)Базовые концепции
// ## Begin33
// Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.

// Тут действительно можно не понять как делать, по факту X, A, Y
// это вводные данные их можно рандомно задать, через Math.random(), либо самому ввести.
//     а на выходе возвращай пару значений (можешь в массиве)

const costSweets = function (X, A, Y) {
    //1
    const oneKilogram = A / X;
    return oneKilogram * Y;

    //2
    //return (A / X) * Y;

    // 3 рекурсия

    if( Y >= 10) return;

    costSweets(Y + 1);
}

// console.log(costSweets(Math.round(Math.random() * 10), 10, 5));

// ## Begin34
// Известно, что X кг шоколадных конфет стоит A рублей, а Y кг ирисок стоит B рублей.
//     Определить, сколько стоит 1 кг шоколадных конфет, 1 кг ирисок, а также во сколько раз шоколадные конфеты дороже ирисок.

const costSweetsOne = function (X, A, Y, B){
    const oneKilogramChocolates = A / X;
    const oneKilogramToffee = B / Y;
    const difference = A - B;

    return `Шоколадные конфеты дороже ирисок на ${difference} рубля`;
}

// console.log(costSweetsOne(3, 15, 5, 12));

// # 2)Арифметические операции
// Все входные и выходные данные в заданиях этой группы являются целыми числами.
//     Все числа, для которых указано количество цифр (двузначное число, трехзначное число и т. д.),
// считаются положительными.
//
// ## Integer21
// С начала суток прошло N секунд (N — целое).
// Найти количество секунд, прошедших с начала последней минуты.

const quantitySeconds = (seconds) => {
    const s = seconds / 60;
    const w = s - Math.floor(s);
    return `С начало последней минуты прошло ${w.toFixed(3)} секунд`;
}

// console.log(quantitySeconds(15189));

//
// ## Integer30
// Дан номер некоторого года (целое положительное число).
// Определить соответствующий ему номер столетия, учитывая, что, к примеру, началом 20 столетия был 1901 год.
//
//
// # 3)Логические выражения
// Во всех заданиях данной группы требуется вывести логическое значение TRUE,
//     если приведенное высказывание для предложенных исходных данных является истинным,
//     и значение FALSE в противном случае.
//     Все числа, для которых указано количество цифр (двузначное число, трехзначное число и т. д.),
// считаются целыми положительными.
//
// ## Boolean31
// Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника.
//     Проверить истинность высказывания: «Треугольник со сторонами a, b, c является равнобедренным».
//
// если a === b || a === c  то треугольник равнобедренный

const triangleIsosceles = function(a, b, c) {
    if(a === b){
        return 'Треугольник равнобедренный';
    }
    if(b === c){
        return 'Треугольник равнобедренный';
    }
    if (a === c) {
        return 'Треугольник равнобедренный';
    }

    return 'Теугольник не равнобедренный'
}

// console.log(triangleIsosceles(2, 6, 5));

// ## Boolean33
// Даны целые числа a, b, c.
//     Проверить истинность высказывания: «Существует треугольник со сторонами a, b, c».

const triangle = function (a, b, c){
    if(a === 0 || b === 0 || c === 0){
        return 'Треугольник не существует';
    }

    return 'Треугольник существует';
};
//
// console.log(triangle(2, 0, 5));

// # 4)Условный оператор
// Во всех заданиях данной группы требуется вывести логическое значение TRUE,
//     если приведенное высказывание для предложенных исходных данных является истинным,
//     и значение FALSE в противном случае.
//     Все числа, для которых указано количество цифр (двузначное число, трехзначное число и т. д.),
// считаются целыми положительными.
//
// ## if20
// На числовой оси расположены три точки: A, B, C.
//     Определить, какая из двух последних точек (B или C) расположена ближе к A,
//     и вывести эту точку и ее расстояние от точки A.
// если B меньше чем C, то B ближе к А

const distance = function (A, B, C){
    if(B < C){
        return `Расстояние до точки А ${B}`;
    }

    return `Расстояние до точки А ${C}`;
}

// console.log(distance(2, 10, 5));

// ## if29
// Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
// «нулевое число», «положительное нечетное число» и т. д.

const integer = function (number) {
    if(number > 0){
        return 'положительное четное число';
    }
    if(number === 0){
        return 'нулевое число';
    }
    if(number < 0){
        return 'отрицательное четное число';
    }
}

// console.log(integer(-6));

// # 5) Цикл с параметром (for)
//
//     ## for17
// Дано вещественное число A и целое число N (>0).
// Используя один цикл, найти сумму "1 + A + A^2 + A^3 + ... + A^N"

const for17 = (A, N) => {
    let sum = 1, pow = 1
    for(let i = 0; i <= N; i += 1) {
        pow = pow * A
        sum = sum + pow

        // sum +=  Math.pow(A, i);

        // sum += A ** i;

        // if(i === 0) {
        //     sum += 1
        //     continue
        // }
        //
        // if(i === 1) {
        //     sum += A
        //     continue
        // }
        // let temp = A
        // for(let j = 0; j < i; j += 1){
        //     temp = temp * temp
        // }
        // sum += temp



    }

    return sum;
}

// console.log(for17(2, 10));

// ## for20
// Дано целое число N (> 0). факториал
// Используя один цикл, найти сумму "1! + 2! + 3! + ... + N!"

function sumNumbers(number){
    let sum = 1;

    for (let i = 0; i <= number; i++){
        sum *= i;
    }

    return sum;
}
// console.log(sumNumbers(5));

// Рекурсия !!!

function factorial (n){
    if(n <= 1){
        return 1;
    }

    return n * factorial(n - 1);
}

// console.log(factorial(5));

// ## for21
// Дано целое число N (> 0).
// Используя один цикл, найти сумму "1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(N!)"
// (выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: "N! = 1·2·...·N").
// Полученное число является приближенным значением константы e = exp(1).

function sumNumbers (number){
    let sum = 0;

    for(let i = 0; i <= number; i += 1){
        sum += i + i/(i+1);
    }

    return sum;
};

// console.log(sumNumbers(5));

// ## for22
// Дано вещественное число X и целое число N (>0).
// Найти значение выражения "1+X +X^2/(2!)+...+X^N/(N!)"

function for22 (X, N){
    let sum = 1;
    let factorial = 1;
    let pow = 1;

    for(let i = 1; i < N; i += 1){
        pow *= X;
        factorial *= i;
        sum += X + pow / factorial;
    }

    return sum;
}

// console.log(for22(5, 3));

// # 6) Цикл с условием
//
// ## while7
// Дано целое число N (> 0).
// Найти наименьшее целое положительное число K, квадрат которого превосходит N: K^2 > N

function while7 (N){
    let K = 1;

    while(Math.pow(K, 2)< N){
        K += 1;
    }

    return K;
}

// console.log(while7(555));

// ## while9
// Дано целое число N (>1).
// Найти наименьшее целое число K, при котором выполняется неравенство: 3^K > N.

function while9 (N){
    let K = 1;

    while(3 ** K < N){
        K += 1;
    }

    return K;
}

// console.log(while9(15));

// ## while17
// Дано целое число N (>0). /// 555
// Используя операции деления нацело и взятия остатка от деления,
//     вывести все его цифры, начиная с самой правой (разряда единиц)

function while17 (N){
    let counter = N, divider = 1
    const res = []
    while(counter > 0) {
        console.log(counter, divider, Math.floor(counter / divider) % 10)
        res.unshift(Math.floor(counter) % 10)
        divider = divider * 10
        counter = Number(String(counter).slice(0, -1))
    }

    // return [Math.floor(N / 1000) % 10, Math.floor(N / 100) % 10, Math.floor(N / 10) % 10, N % 10];
    return res
}

// console.log(while17(3456));

// ## while24
// Дано целое число N (> 1).
// Проверить, является ли число N числом Фибоначчи. Если является, то
// вывести TRUE, если нет — вывести FALSE.
//
//     Последовательность чисел Фибоначчи (FK) определяется следующим образом:
//     "F[1] = 1, F[2] = 1, F[3] = F[1] + F[2], F[4] = F[2] + F[3] ... где сами числа = 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144..."


function while24 (N){
    let number1 = 1;
    let number2 = 1;

    while(N >= (number1 + number2)){
        let temp = number1;
        number1 = number2;
        number2 += temp;
        console.log(number2)
        if(N === number2){
            return true;
        }
    }

    return false;
}

// console.log(while24(144));

// # 7) Последоельности

// Во всех заданиях данной группы предполагается, что исходный набор содержит ненулевое число элементов
// (в частности, число N всегда больше нуля).
//
// ## Series2
// Даны десять вещественных чисел.
//     Найти их произведение.
// [0,1,2,3,4,5,6,7,8,9]

function Series2 (array){
    let composition = 1;

    for (let i = 1; i <= array.length; i += 1){
        composition *= i;
    }

    return composition;
}

// console.log(Series2([1,2,3,4,5,6,7,8,9]));


// ## Series3
// Даны десять вещественных чисел.
//     Найти их среднее арифметическое.

function Series3 (array){
    let sum = 0;

    for (let i = 0; i <= array.length; i += 1){
        sum += i;
    }

    return sum / array.length;
}

// console.log(Series3([1,2,3,4,5,6,7,8,9]));

// # 8) Функции
//
// ## Proc1
// Описать функцию PowerA3(A, B), вычисляющую третью степень числа A и возвращающую ее.

function Proc6 (A){
    const B = A ** 3;

    return B;
}

// console.log(Proc6(2))

// ## Proc6
// Описать функцию DigitCountSum(K, C, S),
// находящую количество C цифр целого положительного числа K, а также их сумму S
// (K — входной, C и S — выходные параметры целого типа).

function Proc6 (K){
    const strNum = String(K);
    let S = 0;
    let C = strNum.length;

    for(let i = 0; i < strNum.length; i++){
        S += Number(strNum[i]);
    }

    return {C, S};
}

// console.log(Proc6(345));

// # 9) Минимумы и максимумы
// Для решения заданий из данной группы следует использовать «однопроходные» алгоритмы,
//     позволяющие получить требуемый результат после однократного просмотра набора исходных данных.
//     Во всех заданиях данной группы предполагается, что исходный набор содержит ненулевое количество элементов
// (в частности, число N всегда больше нуля).
//
// ## Minmax1
// Дано целое число N.
//     Сгенерируйте массив из N случайных целых чисел.
//     Найти минимальный и максимальный из элементов данного массива и вывести их в указанном порядке.

function Minmax1 (N){
    const array = [];
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i <= N; i ++){
        array.push(Math.random() * 100);
        if(array[i] < min){
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
    }
    console.log(array)
    return {min, max}

}

// console.log(Minmax1(4));

// ## Minmax2
// Дано целое число N и набор из N прямоугольников,
//     заданных своими сторонами — объектами c парами рандомных чисел {a, b}.
// Найти минимальную и максимальную площадь прямоугольников из данного набора.
//     Пример массива на JS: "[{a: 4, b: 5},{a: 1, b: 7},{a: 1, b: 6},{a: 2, b: 2},{a: 1, b: 9}]"

function Minmax2 (N){
    let array = [];

    for(let key of N) {
        //let w = Object.values(i);

        array.push(key.a * key.b);
    }

    // return array;
    // return Math.min(...array);
    return Math.max(...array);
}

// console.log(Minmax2([{a: 4, b: 5},{a: 1, b: 7},{a: 1, b: 6},{a: 2, b: 2},{a: 1, b: 9}]));

// Case1. Дано целое число в диапазоне 1–7.
// Вывести строку — название дня недели,
// соответствующее данному числу (1 — «понедельник» 2 - вторник и т.д)

function caseOne (number) {
    switch (number){
        case 1:
            return 'Monday';
        case 2:
            return "Еuesday";
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday ';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';

        default:
            return 'is not weak day';
    }
}

// console.log(caseOne(3));


// Case4. Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 — февраль и т. д.).
// Определить количество дней в этом месяце для невисокосного года.

function Case4 (number){
    switch (number){
        case 1:
            console.log('30 дней');
            break;
        case 2:
            console.log('Высокосный год');
            break;
        case 3:
            console.log('31 дней');
            break;
        case 4:
            console.log('30 дней');
            break;
        case 5:
            console.log('31 дней');
            break;
        case 6:
            console.log('30 дней');
            break;
        case 7:
            console.log('31 дней');
            break;
        case 8:
            console.log('30 дней');
            break;
        case 9:
            console.log('31 дней');
            break;
        case 10:
            console.log('30 дней');
            break;
        case 11:
            console.log('31 дней');
            break;
        case 12:
            console.log('30 дней');
            break;

        default:
            return "Введите правильную цифру"
    }
}

// console.log(Case4(2));


// Case5. Арифметические действия над числами пронумерованы следующим образом:
// 1 — сложение, 2 — вычитание, 3 — умножение, 4 — деление.
// Дан номер действия N (целое число в диапазоне 1–4) и вещественные числа A и B (В не равно 0).
// Выполнить над числами указанное действие и вывести результат.

function Case5 (number){
    const A = 1;
    const B = 2;

    switch (number){
        case 1:
            return A + B;
        case 2:
            return A - B;
        case 3:
            return A * B;
        case 4:
            return A / B;

        default:
            return 'Введите привильное число'
    }
}

// console.log(Case5(6));

//Case6. Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр.
// Дан номер единицы длины (целое число в диапазоне 1–5)
// и длина отрезка в этих единицах (вещественное число). Найти длину отрезка в метрах.

function Case6 (number) {

    switch (number) {
        case 1:
            return number * 10;
        case 2:
            return number / 1000;
        case 3:
            return number;
        case 4:
            return number * 1000;
        case 5:
            return number * 100;

        default:
            return 'Введите правильное число';
    }
}

// console.log(Case6(1));


//'89194597824' ---> "+7 (919) 459 78-24 "
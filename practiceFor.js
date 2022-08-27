// Series14. Дано целое число K и набор ненулевых целых чисел; признак его завершения — число 0. Вывести количество чисел в наборе, меньших K.
// генерирует рандомный массив

function arrayGenerat(spred) {
    const array = []

    for (; ;) {
        const randomNumber = Math.round(Math.random() * spred);

        if (randomNumber === 0) {
            break;
        }

        array.push(randomNumber);
    }

    return array;
}


function Series14(K, array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < K) {
            result.push(array[i]);
        }
    }

    return result;
}

// console.log(Series14(10, arrayGenerat(9)));

// Series19 Дано целое число N (> 1) и набор из N целых чисел. Вывести те элементы в наборе, которые меньше своего левого соседа, и количество K таких элементов.

function Series19(N) {
    const result = [];

    for (i = N.length - 1; i > 0; i--) {
        if (N[i] < N[i - 1]) {
            result.push(N[i]);
        }
    }

    return result.length;
}

// console.log(Series19([1, 2, 3, 4, 5]));

// Series21 Дан набор из N вещественных чисел. Проверить, образует ли данный набор возрастающую последовательность. Если образует, то вывести TRUE, если нет — вывести FALSE.

function Series21(array) {
    const result = [];
    let isIncreasingSequence = true;

    for (let i = 0; i <= array.length-1; i++) {
        if (array[i] > array[i + 1]) {
            isIncreasingSequence = false;
        }
    }

    return isIncreasingSequence;
}

// console.log(Series21([1,2,3,4,5,9,7,8,9]));

// Series24. Дано целое число N и набор из N целых чисел, содержащий по крайней мере два нуля.
// Вывести сумму чисел из данного набора, расположенных между последними двумя нулями (если последние нули идут подряд, то вывести 0).

function Series24 (array) {
    let result = 0;
    let indFirst = 0;
    let indSecond = 0;

    for(let i = array.length - 1; i > 0; i--){
        if(array[i] === 0 && indFirst === 0){
            indFirst = i;
        } else if(array[i] === 0 && indFirst !== 0){
            indSecond = i;
            break;
        }
    }

    for(let i = indFirst; i > indSecond ; i--){
        result += array[i];
    }

    return result;
}

// console.log(Series24([1,2,0,0,3,5,9,0,5,5,0,4]));

// Array15. Дан массив A размера N.
// Вывести вначале его элементы с нечетными номерами в порядке возрастания номеров, а затем — элементы с четными номерами в порядке убывания номеров.

function Array15 (array){
    const oddNumbers = []
    const evenNumbers =[]

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            oddNumbers.push(array[i]);
        }
        if(array[i] % 2 === 0){
            evenNumbers.push(array[i])
        }
    }

    const resOddNumbers = oddNumbers.sort();
    const resEvenNumbers = evenNumbers.sort(function (a, b){ return b - a});

    return resOddNumbers.concat(resEvenNumbers);
}

// console.log(Array15([1,2,3,5,9,8,5,5,6,4]));

// Minmax11. Дано целое число N и набор из N целых чисел. Найти номер последнего экстремального (то есть минимального или максимального) элемента из данного набора.

function Minmax11 (array) {
    let max = -Infinity;
    let min = Infinity;

    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
    }

    if(min < 0){
        min *= -1;
    }

    return min > max ? min * -1 : max;
}

// console.log(Minmax11([-105,-1,-2,3,4,5,6,9,87,55,66,99]))

// Minmax16. Дано целое число N и набор из N целых чисел. Найти количество элементов, расположенных перед первым минимальным элементом.

function Minmax16 (array) {
    let min = Infinity;
    let indexMinNumber = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            indexMinNumber = i;
            min = array[i]
        }
    }

    return indexMinNumber;
}

// console.log(Minmax16([-2,-1,1,2,3,8,9,6,5,88,44,-99,44144]))

// Minmax17. Дано целое число N и набор из N целых чисел. Найти количество элементов, расположенных после последнего максимального элемента.

function Minmax17 (array) {
    let max = -Infinity;
    let indexMaxNumber = 0;

    for(let i = array.length - 1; i >= 0; i--){
        if(array[i] > max){
            indexMaxNumber = array.length - 1 - i;
            max = array[i];
        }
    }

    return indexMaxNumber;
}

// console.log(Minmax17([-2,-1,1,2,3,8,9,6,5,88,44,-99]));

// Array47 Дан целочисленный массив размера N. Найти количество различных элементов в данном массиве
// цикл цикл (найти одинаковы элемент)
// проверка на уникальность

function Array47 (array){
    const result = [];

    //1
    // for(let i = 0; i < array.length; i++){
    //     if(!result.includes(array[i])){
    //         result.push(array[i])
    //     }
    // }

    //2
    // for(let i = 0; i < array.length; i++){
    //     let isDouble = false;
    //     for(let j = 0; j < result.length; j++){
    //         if(result[j] === array[i]){
    //             isDouble = true;
    //         }
    //     }
    //     if(!isDouble){
    //         result.push(array[i]);
    //     }
    // }

    //3
    const setResult = new Set(array);

    return [...setResult].length;
}

// console.log(Array47([-2,-1,1,2,0,3,3,8,9,6,5,88,44,-99]));
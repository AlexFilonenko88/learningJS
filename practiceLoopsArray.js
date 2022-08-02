// 1) Дан массив размера N и целые числа K и L (1 ≤ K ≤ L ≤ N). Найти
// сумму элементов массива с номерами от K до L включительно.

function array1 (N, K, L) {
    const sun = [];

    for (let i = 0; i <= N.length; i++) {
        if (i === K && i === L) {

        }
    }
}

// console.log(array1([0,1,2,3,4,5,6,7,8,9],2, 4));

// 2) Minmax6◦ Дано целое число N и набор из N целых чисел. Найти номера
// первого минимального и последнего максимального элемента из данного
// набора и вывести их в указанном порядке.

function Minmax6 (array) {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = i;
        }
        if(array[i] > max){
            max = i;
        }
    }

    return {min, max};
}

// console.log(Minmax6([1,2,3,4,5,6,7,8,9]))

// 3) Series1 Данн массив из десяти вещественных чисел. Найти произведение всех чисел .

function Series1 (arrayNumber) {
    let compositionNumber = 1;

    for (let number of arrayNumber){
        compositionNumber *= number;
    }

    return compositionNumber;
}

// console.log(Series1([1,2,3,4,5,6,7,8,9]))

// 4) Minmax1 Дано целое число N и набор из N чисел. Найти минимальный и
// максимальный из элементов данного набора и вывести их в указанном
// порядке. (Реализовать поиск в цикле генераци массива)

function Minmax1 (array) {
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
    }

    return {min, max};
}

// console.log(Minmax1([1,2,3,4,5,6,7,8,9,10]))


// 5) Series3 Данн массив из N вещественных чисел. Найти их среднее арифметическое.

function Series3 (array) {
    let w = 0;

    for(let number of array){
        w += ((number) / array.length);
    }

    return w;
}

// console.log(Series3([1,2,3]));

// 6) Series11. Даны целые числа K, N и набор из N целых чисел. Если в наборе
// имеются числа, меньшие K, то вывести TRUE; в противном случае вывести
// FALSE.

function Series11 (array, K) {
    for (let number of array){
        if(number < K){
            return true;
        }
    }

    return false;
}

// console.log(Series11([1,2,3], 3));

// 7) Series12. Дан набор ненулевых целых чисел; признак его завершения — число 0.
// Вывести количество чисел в наборе.

// ????????
function Series12 (array) {
    return array.length;
}

// console.log(Series12([1,2,3]));

// 8) Series13. Дан набор ненулевых целых чисел; признак его завершения — число 0.
// Вывести сумму всех положительных четных чисел из данного набора. Если требуемые числа в наборе отсутствуют, то вывести 0.

function Series13 (array){
    let sum = 0;

    for(let number of array){
        if(number > 0 && number % 2 === 0){
            sum += number;
        }
        if(number < 0 && number % 2 === 1){
            return false;
        }
    }

    return sum;
}

// console.log(Series13([-1,-3]));

// 9) Array48. Дан целочисленный массив размера N. Найти максимальное количество его одинаковых элементов.

function Array48 (array) {
    const result = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] === array[i + 1]){
            result.push(array[i]);
        }
    }

    return  result.length;
}

// console.log(Array48([1,1,1,3,9,5,6,7,8,9]));

// 10) Array49. Дан целочисленный массив размера N. Если он является перестановкой, то есть содержит все числа от 1 до N, то вывести 0; в противном
// случае вывести номер первого недопустимого элемента.

function Array49 (array){
    for(let i = 0; i < array.length; i++){
        // console.log(array[i] < array[i + 1]);
        if(array[i] > array[i + 1]){
            return i;
        }
        if(array[i] < array[i + 1]){
            return 0;
        }
    }
}

// console.log(Array49([100,1,2,3,9,5,6,7,8,9]));
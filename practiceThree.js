// 1. Дан массив A размера N и целое число K (1 ≤ K ≤ N).
// Преобразовать массив, увеличив каждый его элемент на исходное значение элемента AK

function array1 (A, N){
    let newArray = [];

    for(let i = 0; i < A.length; i ++){
        newArray += A[i] + A[N];
    }

    return newArray;
}

// console.log(array1([0,1,3,3,6,7,9,10], 2));


// 2. Дан целочисленный массив размера N. Увеличить все четные числа, содержащиеся в массиве, на исходное значение первого четного числа.
// Если четные числа в массиве отсутствуют, то оставить массив без изменений.
// "взять" первое четное число ?
// на +
// в *

function array2 (N) {
    const newArray = [];
    let evenNumber = null;
    //
    // for(let i = 0; i < N.length; i++){
    //     if(N[i] % 2 === 0){
    //         evenNumber = N[i];
    //         break;
    //     }
    // }

    for(let i = 0; i < N.length; i ++){
        if(!evenNumber && N[i] % 2 === 0){
            evenNumber = N[i];
        }
        if(N[i] % 2 === 0){
            newArray.push(N[i] + evenNumber);
        } else {
            newArray.push(N[i]);
        }
    }

    return newArray;
}

// console.log(array2([1,2,3,4,5,6,7]));

//    3. Дан целочисленный массив размера N.
//    Вывести все содержащиеся в данном массиве четные числа в порядке убывания их индексов, а также их количество.

function array3 (N){
    const arrayNew = [];

    // for(let i = 0; i <= N.length; i++){
    //     if(N[i] % 2 === 0){
    //         arrayNew.push(N[i]);
    //     }
    // }

    for(let i = N.length-1; i >= 0; i-- ){
        if(N[i] % 2 === 0) {
            arrayNew.push(N[i])
        }
    }

    return [arrayNew, arrayNew.length];
}

// console.log(array3([1,2,3,4,5,6,7]));

//     4. Дан массив ненулевых целых чисел размера N. Проверить, образуют ли его элементы число фибоначи.
//     (Число фибоначи - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181)

function array4 (N){
    // если текуще чило массива не равен сумме двух предыдущих элементов то это не число фиббоначи
}

// console.log(array4([1,2,3,4,5,6,7,8]));

// 5. Сформировать массив длинной N. Проверить чередуются ли в нем четные и нечетные числа

function array5 (N){ // аргументы
    const newArray = [];
    let isOdd = true;

    for(let i = 0; i < N; i++) {
        newArray[i] = Math.round(Math.random()*10);
        if(isOdd && newArray[i] % 2 === 0){
            return false;
        }
        if(!isOdd && newArray[i] % 2 !== 0){
            return false;
        }
        isOdd = !isOdd;
    }
    console.log(newArray);
    return true;
}

// console.log(array5(3)); // параметры

// 6. Данн массив array. Проверить чередуются ли в нем отрицательные и положительные числа.
// true / false

function array6 (array){
    let isPositive = array[0] > 0;

    for(let i = 1; i < array.length; i++){
        if(isPositive && array[i] > 0){
            return false;
        }
        if(!isPositive && array[i] < 0){
            return false;
        }
        isPositive = !isPositive;
    }

    return true;
}

// console.log(array6([-1, 2, -1, 6]));

//    7. Дан массив A размера N. Найти минимальный элемент из его элементов с четными номерами (с четным индексами)

function array7 (A){
    let min = Infinity;

    for(let i = 0; i <= A.length; i ++){
        if(i % 2 === 0 && A[i] < min){
            min = A[i];
        }
    }

    return min;
}

// console.log(array7([1, 2, 4]));


// 8. Сформировать объект формата {a: 1, b: 2, c: 3, d: 4...}
// [1,2,3,4,5,6,7,8,9]

function object8 (array){
    const obj = {};
    const shiftNumber = 97;

    for (let i = shiftNumber; i < array.length + shiftNumber; i++){
        const field = String.fromCharCode(i); // возр по числовому значению юникод саму букву
        obj[field] = array[i - shiftNumber]; // ключ = значение
    }

    return obj;
}

// console.log(object8([1,2,3,4,5,6,7,8,9]));

// 9. дан массив объектов [{name: "vasya", age: 33}, {name: "petya", age: 22}, {name: "Sacha": 23}, {name: "kolya": age: 46}]
// Сформировать новый массив объектов из объектов, у которых age < 30
//obj.age   // obj.['age']

function object9 (array) {
    const result = [];

    for (let i = 0; i < array.length; i++){
        if(array[i].age < 30){
            result.push(array[i]);
        }
    }

    return result;
}

// console.log(object9([{name: "vasya", age: 33}, {name: "petya", age: 22}, {name: "Sacha", age: 23}, {name: "kolya", age: 46}] ));

// 10. Дан объект координат, вида {a: 1,5, b: 3,6, c: 7,2, d: 8,2, e: 1,2} вычислить среднюю координату в заданном объекте

function object10 (object){
    let result = 0;
    // const resultArray = [];
    let increment = 0;

    for(let obj in object){
        result += object[obj];
        increment ++;
    }

    return result / increment;
}

// console.log(object10({a: 1.5, b: 3.6, c: 7.2, d: 8.2, e: 1.2}));

// 11. Дан массив объектов(учеников в классе) вида
// [{name: "vasya", age: 12, score: 4}, {name: "petya", age: 13,score: 3}, {name: "Sacha": 12, score: 5}, {name: "kolya": age: 13, score: 5}]
// поменять score в объекте с минимальным значением на максимальное

function object11 (array){
    let min = Infinity;
    let max = -Infinity;
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 0; i < array.length; i++){
        if(array[i].score < min){
            min = array[i].score;
            minIndex = i;
        }
        if(array[i].score > max){
            max = array[i].score;
            maxIndex = i;
        }
    }
    const newArray = array;

    newArray[minIndex].score = newArray[maxIndex].score;

    return newArray;

}

// console.log(object11([{name: "vasya", age: 12, score: 4}, {name: "petya", age: 13,score: 3}, {name: "Sacha", age: 12, score: 5}, {name: "kolya", age: 13, score: 5}]));

// 12. Дан объект координат, вида {a: {x: 1.5, y: 2.3}, b: {x: 3.6, y: 6.5}, c: {x: 7.2, y: 3.3}, d: {x: 8.2, y: 5.5}, e: {x: 1.2, y: 3.7}}
// вычислить среднюю координату в заданном объекте

function object12 (objects){
    let result = [];

    for(let obj in objects){
        result.push((objects[obj].x + objects[obj].y) / 2);
    }

    return result;
}

// console.log(object12({a: {x: 1.5, y: 2.3}, b: {x: 3.6, y: 6.5}, c: {x: 7.2, y: 3.3}, d: {x: 8.2, y: 5.5}, e: {x: 1.2, y: 3.7}}));

// 13. Дан массив объектов [{a: 1, b: 3, c: 2},{a: 4, b: 3, c: 7},{a:2, b: 3, c: 5}]
// Продублировать объект, содержащий ее максимальный элемент

function object13 (arrayObj){
    let max = 0;

    for(let obj of arrayObj){
        for(let elem in obj){
            if(obj[elem] > obj[elem + 1]){
                max += obj[elem]
            }
        }
    }

    return max;
}

// console.log(object13([{a: 1, b: 3, c: 2},{a: 4, b: 3, c: 7},{a:2, b: 3, c: 5}]));

// 14. Дан массив формата ['a','v','w','u','q','p','i'], перевести его в объект формата {a: 0, v:1, w:2,u:3, q:4, p:5, i:6}
//
// 15. Дан массив объектов [{a: 5, b: 4, c:6},{a: 2, b: 1, c: 7},{a:2, b: 3, c: 5}]
// Получить объект с максимальной суммой значений и Сформировать массив из сумм отбъектов (a + b + c)
//
// 16. Дан массив формата ['2','5','1','4,'3','6','0'] Перевести строки в числа и отсортировать их в порядке возрастания.
// Сформировать из этих значений объект, формата {'2': 0, '5':1, '1':2, '4':3, '3':4, '6':5, '0':6}

function object16 (array){
    const r = [];
    // const w = r.sort();
    const result = [];

    for (let string of array){
        r.push(Number(string));

        for(let i = 0; i < r.length; i++){
            console.log(array[string]);
            // return {array[string]:r[i]};
        }
    }

    return r;
}

// console.log(object16(['2','5','1','4','3','6','0']));

// 17. Есть массив, формата [4,8,2,8,6] получить из него массив, формата [[2,2],[4,4],[1,1],[4,4],[3,3]]
//
// 18. Есть массив, формата [2,3,1,4,2] получить из него массив, формата [[1,2],[1,2,3],[1],[1,2,3,4],[1,2]]
//
// 19. Есть массив, формата [4,8,2,8,6] получить из него объект, формата { '2':2, '4':4, '1':1, '4':4, '3':3}
//
// 20. Найти в данном массиве объектов title, с самым длинным normalized_job_title
// и поменять местами объекты массива первый с последним https://gist.github.com/Greyewi/e969847c8b901357c9d2f9c9e6a1ab27
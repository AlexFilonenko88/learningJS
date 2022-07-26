// String26. Дано целое число N (> 0) и строка S.
//     Преобразовать строку S в строку длины N следующим образом: если длина строки S больше N,
//     то отбросить первые символы, если длина строки S меньше N, то в ее начало добавить символы «.» (точка).

function String26 (N, S){
    if (S.length > N){
        return S.slice(2);
    }
    if(S.length < N){
        return S.padStart(6, ".");
    }
}

// console.log(String26(8, "Hello"));

//     String27. Даны целые положительные числа N1 и N2 и строки S1 и S2.
//     Получить из этих строк новую строку, содержащую первые N1 символов строки S1 и последние N2 символов строки S2 (в указанном порядке).

function String27 (N1, N2, S1, S2){
    const letterOne =  S1.slice(0, N1);
    const letterTwo = S2.slice(-N2);

    return {letterOne, letterTwo};
}

// console.log(String27(2, 5, 'Hello', 'World!'));

// String28. Дан символ C и строка S. Удвоить каждое вхождение символа C в строку S.

function String28 (C, S){
    let str = S;

    for(let i = 0; i < S.length; i++){
        if(S[i] === C){
            str += C * 2;
        }
    }

    return str;
}

console.log(String28('a', 'AalLBb'));

//     String41. Дана строка, состоящая из русских слов, разделенных пробелами (одним или несколькими). Найти количество слов в строке.

function String41 (string){

}

// console.log(String41('Hello'));

//     String42. Дана строка, состоящая из русских слов, набранных заглавными буквами и разделенных пробелами (одним или несколькими).
// Найти количество слов, которые начинаются и заканчиваются одной и той же буквой.
//
//     String57. Дана строка-предложение с избыточными пробелами между словами. Преобразовать ее так, чтобы между словами был ровно один пробел.
//
//     String58. Дана строка, содержащая полное имя файла, то есть имя диска, список каталогов (путь), собственно имя и расширение.
//     Выделить из этой строки имя файла (без расширения).
//
// String61. Дана строка, содержащая полное имя файла. Выделить из этой строки название последнего каталога (без символов «\»).
// Если файл содержится в корневом каталоге, то вывести символ «\».
//
// Matrix49. Дана матрица размера M × N. Преобразовать матрицу, поменяв местами минимальный и максимальный элемент в каждой строке.
//
//     Matrix80. Дана квадратная матрица A порядка M. Найти сумму элементов ее главной диагонали, и побочной диагонали
// (главная диагональ: A[1,1], A[2,2], A[3,3], . . ., A[M,M]. побочная : A[1,M], A[2,M−1], A[3,M−2], . . ., A[M,1].
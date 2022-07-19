// number
// string
// boolean
// undefined
// null
// new Symbol('q')
// new BigInt
// NaN

console.log(!!NaN, !!null, !!"", !!undefined, !!false, !!0, !!-0);
// console.log(sum(2, 5))

// function sum(a, b){
//   console.log(arguments)
//   return a + b
// }

const sum2 = function (a, b) {
    console.log(arguments);
    return a + b;
};

const sum3 = (a, b) => a + b;

console.log(sum3(5, 5));

const arr = [1, -2, 5, -3, 6, -4, 2];
const positiveArr = arr.map((item) => {
    if (item < 0) {
        return 0;
    }
    return item;
});

console.log(positiveArr);

const arr2 = arr;

const sum = (defaultValue) => {
    let counter = defaultValue
    return (modify) => {
        counter += modify
        return counter
    }
}

const sumF = (a) => (b) => a + b

const memoSum = sum(1) //defaultValue

console.log(memoSum(2)) //modify
console.log(memoSum(5))
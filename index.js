// I would be taking the fibonacci problem first

//loop solution
function fibonacci(num) {
    let fibonacciArray = [0, 1];
    for (let i = 0; i < num; i++) {
        let newFibonacciNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]
        fibonacciArray.push(newFibonacciNumber);
    }
    return fibonacciArray.slice(0, fibonacciArray.length - 2)
}
console.log(fibonacci(7));
//  [0, 1, 1, 2, 3, 5, 8]


// recursive solution

function recursiveFib(num) {
    if (num < 2) {
        return num
    }
    return recursiveFib(num - 1) + recursiveFib(num - 2);
}
console.log(recursiveFib(8));
// i didnt figure out how to push the result into an array yet.

// mergeSort

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    let middle = Math.floor(array.length / 2);
    let leftArray = array.slice(0, middle);
    let righArray = array.slice(middle);
    return merge(mergeSort(leftArray), mergeSort(righArray));
}

function merge(left, right) {
    let sortArray = [];
    let iL = 0;
    let iR = 0;
    while (iL < left.length && iR < right.length) {
        if (left[iL] < right[iR]) {
            sortArray.push(left[iL]);
            iL++
        }
        else {
            sortArray.push(right[iR])
            iR++
        }
    }
    while (iL < left.length) {
        sortArray.push(left[iL]);
        iL++
    }
    while (iR < right.length) {
        sortArray.push(right[iR]);
        iR++;
    }
    return sortArray;
}
console.log(mergeSort([9, 5, 1, 8, 3, 5, 8]));
// [1, 3, 5, 5, 8, 8, 9]
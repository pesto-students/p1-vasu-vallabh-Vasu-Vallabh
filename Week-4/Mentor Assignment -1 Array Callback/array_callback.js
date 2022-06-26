/*what is callback function
A function that is passed to another function as a parameter is called callback function.*/

/*Why do we need callback function
In JS program runs sequentially, from top to bottom
But, sometimes we need to run the program after some other task is completed
This is called async programming
Callback helps us to achieve this by sending the function as a parameter
and execute after the given task in completed*/

/*
const message = function () {
    console.log('This message is shown after 2 seconds');
}

setTimeout(message,2000)

*/

/*
function isOdd(v) {
    if((v %2) !== 0) {
        return true;
    }
    return false;
}

function isEven(v) {
    if((v %2) === 0) {
        return true;
    }
    return false;
}

function filter(numbers, fn) {
    let num = numbers.filter((v) => {
        if(fn(v)) {
            return v
        }
    })
    return num
}

const num = [1,2,3,4];
console.log(filter(num, isOdd));
console.log(filter(num, isEven));
*/
/*write callback functions which takes array and some function
which either perform push or pop to that array*/

function arrayPush (numbers) {
    return numbers.push(9);
}

function arrayPop (numbers) {
    return numbers.pop()
}

function arrayOperations(numbers, fn) {
    return fn(numbers)
}

const numbers = [1, 2, 3, 4, 5, 6];

arrayOperations(numbers, arrayPop)
arrayOperations(numbers, arrayPush)
console.log(numbers)

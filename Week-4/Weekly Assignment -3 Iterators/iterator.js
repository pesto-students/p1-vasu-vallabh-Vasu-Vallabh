/*Implement Fibonacci Series with Iterators*/

//fibonacci Iterator
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
function fib(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
}

function fibSeries(length) {
    return {
        [Symbol.iterator]() {
            let counter = -1;
            return {
                next() {
                    counter++;
                    if (counter < length) {
                        return {done: false, value: fib(counter)}
                    }
                    return {done: true}
                }
            }
        }
    }
}

for (const f of fibSeries(8)) {
    console.log(f)
}


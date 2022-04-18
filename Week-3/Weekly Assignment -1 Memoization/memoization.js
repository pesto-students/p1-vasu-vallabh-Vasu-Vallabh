//memoization is a way to cache the data
//solves the problem of compiling the same code multiple time for a given input
//it could only be applied on the pure function
//pure functions -> given input is same then the output is also same.

//let use memoize to solve the problem
const memoize = (fun) => {
    //store the given input and output in data
    let cache = {};
    return (...input) => {
        if (JSON.stringify(input) in cache) {
            console.log("second");
            return cache[JSON.stringify(input)];
        } else {
            console.log("first");
            cache[JSON.stringify(input)] = fun(...input);
        }
    };
};

const additionOfNumbers = memoize((...num) => {
    let totalSum = 0;
    for (let i = 0; i < num.length; i++) {
        totalSum = totalSum + num[i];
    }
    return totalSum;
});

const t1 = new Date();
additionOfNumbers(2, 3, 4, 4, 3, 5, 6, 8);
console.log(new Date() - t1);

const t2 = new Date();
additionOfNumbers(2, 3, 4, 4, 3, 5, 6, 8);
console.log(new Date() - t2);

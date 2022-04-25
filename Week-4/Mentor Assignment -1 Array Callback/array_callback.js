// Array Callaback function
// The function which loops through the array and returns true for at least one element of an array;

//Using .some method on array to check if the array contains a value greater than 300
myArray = [10,200,500,300,25];
const isGreterThan300 = myArray.some((v) => {
    return v > 600
})

console.log(isGreterThan300);

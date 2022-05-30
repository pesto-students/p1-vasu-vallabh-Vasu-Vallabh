/*
* Find the contiguous subarray within an array, A of length N which has the largest sum.Input Format
* The first and the only argument contains an integer array, A. Output Format:
* Return an integer representing the maximum possible sum of the contiguous subarray.
* Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 For example
*
* Input 1: A = [1, 2, 3, 4, -10]
* Output 1: 10
* Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
*
* Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
* Output 2: 6
* Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6
* */



const getMax = () => {
    // const givenArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const givenArray = [1, 2, 3, 4, -10];
    let maxSofar = givenArray[0]; //if it is not a blank array
    let max = givenArray[0]; // if it is not a blank array

    for (let i=1; i<givenArray.length; i++) {
        let value = givenArray[i];
        maxSofar = Math.max(value, value + maxSofar);
        max = Math.max(maxSofar, max);
    }
    return max;
}

console.log(getMax());

// let sum = 0;
// let largestSum = 0;
// let array = [1, 6, -3, 2,4, -10]; // 10

// for (let i=0; i<array.length; i++) {
//     console.log(array)
//     if(array[i]>=0) {
//         sum += array[i];
//         if(sum> largestSum) {
//             largestSum = sum;
//         }
//         console.log(array[i],{sum})
//     } else {
//              //  -1 + -1 < 2
//         console.log('a ',-(array[i]))
//         console.log('b ',array[i+1])
//         if( (array[i]) < array[i+1]) {
//             console.log(`became zero cause of`, array[i]);
//             sum = 0;
//         } else {
//             sum += array[i];
//         }
//     }
// }

// console.log(largestSum); 
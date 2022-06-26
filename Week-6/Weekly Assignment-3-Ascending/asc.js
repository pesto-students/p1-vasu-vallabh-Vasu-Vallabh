let arr= [0, 2, 1, 2, 0]; // [0,0,1,2,2]
let n = arr.length;
let myArray = [0,0,0];
let finalArray = [];

for(i=0; i<n; i++) {
    if(arr[i] === 0){
        myArray[0] += 1
    } else if(arr[i] === 1){
        myArray[1] += 1
    } else if(arr[i] === 2){
        myArray[2] += 1
    }
}

console.log(myArray)
for(i=0; i<myArray[0]; i++){
    finalArray.push(0)
}

for(i=0; i<myArray[1]; i++){
    finalArray.push(1)
}

for(i=0; i<myArray[2]; i++){
    finalArray.push(2)
}

console.log(finalArray)
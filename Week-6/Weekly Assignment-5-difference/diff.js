let arr = [5, 10, 3, 2, 50, 80];
let target = 78;

const targetDiff = () => {
    for(let i=0; i<arr.length-1; i++) {
        for(j=i+1; j<arr.length; j++) {
            if(target ===  mDiff(arr[i], arr[j])){
                return 1
            }
        }
    }
    return 0
}

let mDiff = (a, b) => {
    if(a > b) {
        return a-b;
    } else {
        return b-a;
    }
}

console.log(targetDiff());
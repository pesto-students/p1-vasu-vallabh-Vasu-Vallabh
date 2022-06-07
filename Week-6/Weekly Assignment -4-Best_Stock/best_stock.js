//let stocks = [7,1,5,3,6,4];
let stocks = [7,6,4,3,1];
let length = stocks.length;
let diff = 0;
let maxDiff = 0;
for(i=0; i<length - 1; i++) {
    for(j=i+1; j<length; j++) {
        diff = stocks[j] - stocks[i];
        maxDiff = Math.max(maxDiff, diff);
        //console.log(stocks[j],stocks[i]);
        //console.log({diff, maxDiff})
    }
}
console.log(maxDiff);
//Promise Example on normal function
const division = (a,b) => {
    return new Promise((resolve, reject) => {
        if(b === 0) {
            reject(new Error("Cannot be divisible by 0"));
        }
        resolve(`${a}/${b} = ${a/b}`);
    });
}

// Resolve
division(10, 2).then((result) => console.log(result)).catch((reason => console.log(reason.message)));

// Reject
division(10, 0).then((result) => console.log(result)).catch((reason => console.log(reason.message)));


//Promise using callback function
const wait = (ms) => {
    return new Promise(((resolve, reject) => {
        if(ms <= 0) {
            reject(new Error('Timeout cannot be <= 0'))
        }
        setTimeout(()=> resolve(`waited for ${ms/1000}`),ms);
    }))
}

//resolve
wait(1000).then((value => console.log(value))).catch((reason => console.log(reason.message)));
//reject
wait(0).then((value => console.log(value))).catch((reason => console.log(reason.message)));

//isAppleAvailable?
//isOrangeAvailable?

const isAppleAvailable = true;
const isOrangeAvailble = false;

const p1 = () => {
    return new Promise((resolve, reject) => {
        if(isAppleAvailable) {
            resolve('Apple Available in the market');
        } else {
            reject("Sorry, Apple is not available");
        }
    })
}

const p2 = () => {
    return new Promise((resolve, reject) => {
        if(isOrangeAvailble) {
            resolve('Orange Available in the market');
        } else {
            reject("Sorry, Orange is not available");
        }
    })
}

const main = () => {
    p1().then((result1) => {
        console.log(result1)
        return p2()
    }).then((result2) => {
        console.log(result2);
    }).catch((error) => {
        console.error(error);
    })
}

main();

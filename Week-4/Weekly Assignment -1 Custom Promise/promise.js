/*
https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a
* Implement a function named getNumber which generates a random number.
* If random Number is divisible by 5 it will reject the promise
* else it will resolve the promise.
* Let’s also keep the promise resolution/rejection time as a variable.
* */

//Implement a function named getNumber which generates a random number
const randomNumber = () => Math.floor(Math.random()*101);

class CustomPromise {
    constructor(handler) {
        this.status = "pending";
        this.value = null;

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
            }
        }

        const reject = (value) => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
            }
        };

        try {
            handler(resolve, reject);
        } catch (e) {
            reject(e)
        }
    }

        then(onFulfilled) {
            if(this.status === 'fulfilled') {
                onFulfilled(this.value);
            }
        }

        catch(onRejected) {
            if(this.status === 'rejected') {
                onRejected(this.value);
            }
        }

}

const p1 = new CustomPromise((resolve, reject) => {
    if((randomNumber()%5) !== 0) {
        resolve('Promise Resolved')
    } else {
        reject('Promise Rejected')
    }
});
p1.then((res) => console.log(res));
p1.catch((res) => console.log(res));

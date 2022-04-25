function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        //let message = `Count is ${count}`;
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

/*
* The Output is 0
* The above function is working as
* count = 0
* message = count
* count = count +1
* when function is invoked the message is 0;
* */

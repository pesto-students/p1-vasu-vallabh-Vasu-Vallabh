//Promise Example.

new Promise((resolve,reject) => {
    resolve(10); // only one can be executed
    reject(20); // if there is no resolve then reject will be executed
}).then(console.log).catch(console.log);

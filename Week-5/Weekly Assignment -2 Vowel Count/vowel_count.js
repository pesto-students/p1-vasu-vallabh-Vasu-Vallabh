/*
    Write a function called vowelCount which accepts a string and
    returns a map where the keys are vowels and the values are the count of the vowels in the string
*/
var log4js = require("log4js");
var logger = log4js.getLogger();

const vowels = {'a': 0,'e': 0, 'i':0, 'o': 0, 'u': 0};
const vowel_count = (name) => {
    const mName = name.toLowerCase();
    let map = new Map(Object.entries(vowels));
    [...mName].forEach(letter => { //ES6 way of looping a string
        map.has(letter) ? map.set(letter, (map.get(letter)+1)) : ''
    });
    return map;
}
logger.level = "debug"; // default level is OFF - which means no logs at all.
logger.info(vowel_count('Aishwarya'));

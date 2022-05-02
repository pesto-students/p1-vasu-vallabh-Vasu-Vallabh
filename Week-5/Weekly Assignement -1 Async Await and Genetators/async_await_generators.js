/*
    Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3().
*/
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug"; // default level is OFF - which means no logs at all.
const t1 = async (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms<=0) {
                reject(new Error('t1: cannot be less than 0 or equal to 0'));
            }
            resolve('t1');
        }, ms);
    });
};

const t2 = async (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ms<=0) {
                reject(new Error('t2: cannot be less than or equal to 0'));
            }
            resolve('t2');
        }, ms);
    });
};

const t3 = async (ms) => {
    return new Promise((resolve, reject) => {
        if(ms<=0) {
            reject(new Error('t3: cannot be less than or equal to 0'));
        }
        setTimeout(() => {
            resolve('t3');
        }, ms);
    });
};

async function main(){
    const t1_result = await t1(3000);
    logger.info(t1_result);
    const t2_result = await t2(0);
    logger.info(t2_result);
    const t3_result = await t3(2000);
    logger.info(t3_result);
}

main().catch(err => logger.error(err.message));

async function* generator() {
    logger.info("starting...");
    try {
        const t1_result = await t1(5000);
        logger.info(t1_result);
        const t2_result = await t2(2000);
        logger.info(t2_result);
        const t3_result = await t3(3000);
        logger.info(t3_result);
    } catch(err) {
        logger.info(err);
    }
    logger.info("ending...");
}

generator().next().catch(err => logger.error(err));

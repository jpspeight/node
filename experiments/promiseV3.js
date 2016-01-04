/**
 * Created by jspeight on 1/1/16.
 */
'use strict';

/*

 * PROMISE EXAMPLE 1 - BASIC PROMISE

 */

/*function createRun(par){
    return new Promise(function(resolve, reject){
        if(par){
            resolve(Math.floor(Math.random() * 5));
        }
        reject('No item');
    });
}
let promise = createRun();
promise.then(function(data){
   console.log(data);
}).catch(function(reason){
   console.log(reason);
});*/

/*

 * PROMISE EXAMPLE 2 - CHAINING

 */


/*console.log(`Promise is starting`);
Promise.resolve('I am here right now').then(
    function step2(result){
        console.log(`Step 2 ${result}`);
        return {'status': 'Passing to step 3'};
    }
).then(function step3(result){
    console.log(`Step 3 ${result.status}`);
});*/


/*

 * PROMISE EXAMPLE 3

 */


console.log(`Promise is starting`);
Promise.reject(new Error('I am an error')).then(
    function step2(result){
        console.log(`Step 2 ${result}`);
        return {'status': 'Passing to step 3'};
    }
).then(function step3(result){
    console.log(`Step 3 ${result.status}`);
}).catch(function logError(reject){
   console.log(reject);
});

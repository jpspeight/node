/**
 * Created by jspeight on 12/30/15.
 */
function task1(callback){
    console.log('task1');
     task2(callback);
}

function task2(callback){
    console.log('task2');
    setTimeout(function(){
        task3(callback);
    },2000);
}

function task3(callback){
    console.log('task3');
    setTimeout(function(){
        task4(callback);
    },2000);

}

function task4(callback){
    console.log('task4');
   callback();
}

task1(function(){

});


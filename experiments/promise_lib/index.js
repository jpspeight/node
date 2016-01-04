/**
 * Created by jspeight on 1/1/16.
 */
var main  = {
    'readFile': 'new.txt',
    'readData': '',
    'logfile' : 'new_v2.txt',
    'runFile' : function(){
        return new Promise(function (resolve, reject) {
            setTimeout(function(){
                    resolve('I am working');
                }, 4000
            );
        });
    },
    'openFile' : function(data){
        console.log('data is ' + data);
    }
};

module.exports = main;
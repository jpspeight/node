/**
 * Created by jspeight on 12/29/15.
 */
'use strict';


var test = {
    prerequest: function(req, res, next){
        req.james = 'james item';
        next();
    },
    request: function(req,res){
        console.log(req.james);
        data[0].james = req.james;
        //console.log(req);
        console.log(req.params.id);
        res.status(200).json(data[0]);
    },
    dbConnect: function(req,res){
        const db = require('../mongoose/connection');
        const nameSchema = require('../mongoose/names');
        var Names = db.model('names', nameSchema);

        Names.find({}).where('age').gt(1).exec(function (err, user) {
            if (err) return console.error(err);
            res.send(user);
        });


    }
};


var data = [
    {
        test: 'success'
    }
];

module.exports = test;
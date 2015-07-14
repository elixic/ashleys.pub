'use strict';
var log = require('debug')('pub:email:log'),
    debug = require('debug')('pub:email:debug'),
    MongoClient = require('mongodb').MongoClient;

    function collect(req, res) {
    debug(req.body);
    MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
        if (err) {
            log(err);
        } else {
            db.collection('pub-email', function(err, collection) {
                if (err) {
                    console.log(err);
                } else {
                    var data = {
                        email: req.body.email
                    };
                    collection.insert(data, {w:1}, function(err, result) {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            });


            db.close();
        }
    });

    res.send(200);
}

module.exports = collect;
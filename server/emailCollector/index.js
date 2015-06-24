'use strict';
var log = require('debug')('pub:email:log'),
    debug = require('debug')('pub:email:debug');

function collect(req, res) {
    debug(req.body);

    res.send(200);
}

module.exports = collect;
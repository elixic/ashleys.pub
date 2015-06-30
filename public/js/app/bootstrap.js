define([
    'require',
    'angular',
    'app'
],
function(require, ng) {
    'use strict';

    requre([], function() {
        ng.bootstrap(document, ['pub']);
    });
});
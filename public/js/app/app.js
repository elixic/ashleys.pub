define([
    'angular',
    'angular-route',
    './Emailform/index'
],
    function (ng) {
        'use strict';
        var app = ng.module('pub', ['ngRoute', 'pub.EmailForm']);

        app.config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'template/EmailFormTemplate',
                    controller: 'EmailFormController'
                });

            }]);

        return app;
    });
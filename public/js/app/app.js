define([
    'angular',
    'angular-route',
    'js/app/Emailform/index'
],
    function (ng) {
        'use strict';
        var app = ng.module('pub', ['ngRoute']);

        app.config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'template/EmailFormTemplate',
                    controller: 'EmailFormController'
                });

            }]);

        return app;
    });
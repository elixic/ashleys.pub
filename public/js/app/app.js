'use strict';
angular.module('pub', ['ngRoute','pub.EmailForm'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'template/EmailFormTemplate',
            controller: 'EmailFormController'
        });

    }]);

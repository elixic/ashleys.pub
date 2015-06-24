'use script';

angular.module('pub.EmailForm')
    .factory('emailFormService', ['$http', function ($http) {
        return {
            store: function (email) {
                var payload = {
                    "email": email
                };
                return $http.post('saveEmail', payload);
            }
        }
    }]);
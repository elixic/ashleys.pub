require([
    'js/app/Emailform/index'
],
function(emailFormModule) {
    'use script';

    emailFormModule
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
});

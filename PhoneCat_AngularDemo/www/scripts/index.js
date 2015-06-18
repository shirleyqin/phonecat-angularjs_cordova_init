(function () {
    'use strict';

    //angular.module('phonecatApp', ['phonecatApp.controllers']);
    //angular.module('phonecatApp.controllers', []);

    //var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatApp.controllers']);
    //phonecatControllers: is new module we just created

    //Because our app is small, we just add all our controllers to this new module
    var phonecatApp = angular.module('phonecatApp', [
        'ngRoute',
        'phonecatControllers',
        'phonecatFilters',
        'phonecatServices'
    ]);

    //phonecatApp.config method: request $routeProvider to be injected into our config fucntion
    // and user $routeProvider.when() method to define our routes
    phonecatApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/phones', {
                    templateUrl: 'partials/phone-list.html',
                    controller: 'PhoneListCtrl'
                }).
                when('/phones/:phoneId', { //:notation
                    templateUrl: 'partials/phone-detail.html',
                    controller: 'PhoneDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/phones'
                });
        }]);

})();
(function () {
    'use strict';

    var phonecatControllers = angular.module('phonecatControllers', []);

    //Use our RESTful service
    phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
        function ($scope, Phone) {
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';
        }
    ]);

    phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);

    //Use $http

    //phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    //    function ($scope, $http) {
    //        $http.get('data/phones/phones.json').success(function (data) {
    //            $scope.phones = data;
    //        });
    //        $scope.orderProp = 'age';
    //    }
    //]);

    ////use $routeParams.phoneId extracted from current route by the $route service
    //phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    //    function ($scope, $routeParams, $http) {
    //        $http.get('data/phones/' + $routeParams.phoneId + '.json').success(function (data) {
    //            $scope.phone = data;
    //            $scope.mainImageUrl = data.images[0];
    //        }).
    //        error(function (data, status, headers, config) {
    //            //alert('no!');
    //        });

    //        $scope.setImage = function (imageUrl) {
    //            $scope.mainImageUrl = imageUrl;
    //        }
        
    //        $scope.phoneId = $routeParams.phoneId;
    //    }
   
    //]);

    //var phonecatApp = angular.module('phonecatApp', []);

    //phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
    //    $http.get('data/phones/phones.json').success(function (data) {
    //        $scope.phones = data;
    //    });

    //    $scope.orderProp = 'age';
    //});

    //phonecatApp.controller('PhoneListCtrl', function ($scope) {
    //    $scope.phones = [
    //      { 'name': 'Nexus S', 'snippet': 'Connie, Shirley Fast just got faster with Nexus S.', 'age': 1 },
    //      { 'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.', 'age': 2 },
    //      { 'name': 'MOTOROLA XOOM™', 'snippet': 'The Next, Next Generation tablet.', 'age':3 }
    //    ];

    //    $scope.orderProp = 'age';
    //});

    
    
})();
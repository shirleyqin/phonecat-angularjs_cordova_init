'use strict';

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function ($resource) {
      return $resource('data/phones/:phoneId.json', {}, {
          query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
      });
  }]);

//var phonecatServices = angular.module('phonecatServices', ['ngResource']);

////Phone: is our service, create a RESTful client?
//phonecatServices.factory('Phone', ['$resource',
//function ($resource) {
//    return $resource('/phones/:phoneId.json', {}, {
//        query: { method: 'GET', params: {phoneId:'phones'}, isArray:true}
//    });
//}]);
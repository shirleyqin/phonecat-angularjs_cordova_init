'use strict';


angular.module('phonecatFilters', []).filter('checkmark', function () {
    return function (input) {
        //u2713, u2718: unicode, represent true and false
        return input ? '\u2713' : '\u2718';
    };
});
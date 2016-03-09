'use strict';

/**
 * @ngdoc filter
 * @name myappsApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the myappsApp.
 */
angular.module('myappsApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name myappsApp.decorator:Servicename
 * @description
 * # Servicename
 * Decorator of the myappsApp
 */
angular.module('myappsApp')
  .config(function ($provide) {
    $provide.decorator('serviceName', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });

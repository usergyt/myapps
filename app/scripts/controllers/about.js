'use strict';

/**
 * @ngdoc function
 * @name myappsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappsApp
 */

define(["app"], function(app) {
  app.register.controller("AboutCtrl", ['$scope' , function($scope) {
    $scope.test="testabout"
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
});

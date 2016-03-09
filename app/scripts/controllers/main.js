'use strict';

/**
 * @ngdoc function
 * @name myappsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappsApp
 */

define(["app"], function(app) {
    app.register.controller("MainCtrl", ['$scope' , function($scope) {
      $scope.test="test"
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }]);
  });

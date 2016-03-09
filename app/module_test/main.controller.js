'use strict';

/**
 * @ngdoc function
 * @name myappsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappsApp
 */

define(["app"], function(app) {
    app.register.controller("MainCtrl", ["$scope" , "$state", "$ionicSlideBoxDelegate","$ionicSideMenuDelegate",function($scope ,$state, $ionicSlideBoxDelegate,$ionicSideMenuDelegate) {
      $scope.test="test";
      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };

      $scope.go_next = function(index){
        $ionicSlideBoxDelegate.next();
      };
      // Called to navigate to the main app
      $scope.startApp = function () {
        $state.go('main');
      };
      $scope.next = function () {
        $ionicSlideBoxDelegate.next();
      };
      $scope.previous = function () {
        $ionicSlideBoxDelegate.previous();
      };

      // Called each time the slide changes
      $scope.slideChanged = function (index) {
        $scope.slideIndex = index;
      };
    }]);
  });





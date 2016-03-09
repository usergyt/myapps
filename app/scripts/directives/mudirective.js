'use strict';

/**
 * @ngdoc directive
 * @name myappsApp.directive:muDirective
 * @description
 * # muDirective
 */
angular.module('myappsApp')
  .directive('muDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the muDirective directive');
      }
    };
  });

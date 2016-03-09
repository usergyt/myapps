'use strict';

describe('Directive: muDirective', function () {

  // load the directive's module
  beforeEach(module('myappsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mu-directive></mu-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the muDirective directive');
  }));
});

'use strict';

describe('Directive: noxNavigation', function () {
  beforeEach(module('App'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<nox-navigation></nox-navigation>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the noxNavigation directive');
  }));
});

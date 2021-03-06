'use strict';

describe('Controller: NavigationcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('gruntExpressWorkflowApp'));

  var NavigationcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavigationcontrollerCtrl = $controller('NavigationcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: BeachesController', function () {

  // load the controller's module
  beforeEach(module('beachesApp'));

  var BeachesController,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BeachesController = $controller('BeachesController', {
      $scope: scope
    });
  }));

  it('should attach a list of beaches to the scope', function () {
    expect(scope.seasides.beaches.length).toBe(32);
  });
});

'use strict';

describe('Controller: NavgroupCtrl', function () {

  // load the controller's module
  beforeEach(module('smartadminApp'));

  var NavgroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavgroupCtrl = $controller('NavgroupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

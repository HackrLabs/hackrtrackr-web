'use strict';

describe('Controller: NavitemCtrl', function () {

  // load the controller's module
  beforeEach(module('smartadminApp'));

  var NavitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavitemCtrl = $controller('NavitemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

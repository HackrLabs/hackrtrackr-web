'use strict';

describe('Controller: ActivitydemoCtrl', function () {

  // load the controller's module
  beforeEach(module('hackrtrackrFrontendApp'));

  var ActivitydemoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitydemoCtrl = $controller('ActivitydemoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

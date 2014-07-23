'use strict';

describe('Controller: ActivitycontentCtrl', function () {

  // load the controller's module
  beforeEach(module('hackrtrackrApp'));

  var ActivitycontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivitycontentCtrl = $controller('ActivitycontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

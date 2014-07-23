'use strict';

describe('Controller: SmartappCtrl', function () {

  // load the controller's module
  beforeEach(module('hackrtrackrFrontendApp'));

  var SmartappCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SmartappCtrl = $controller('SmartappCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

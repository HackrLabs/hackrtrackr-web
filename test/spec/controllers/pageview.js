'use strict';

describe('Controller: PageviewCtrl', function () {

  // load the controller's module
  beforeEach(module('hackrtrackrFrontendApp'));

  var PageviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PageviewCtrl = $controller('PageviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

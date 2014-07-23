'use strict';

describe('Directive: localize', function () {

  // load the directive's module
  beforeEach(module('hackrtrackrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<localize></localize>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the localize directive');
  }));
});

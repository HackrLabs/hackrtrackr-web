'use strict';

describe('Directive: navgroup', function () {

  // load the directive's module
  beforeEach(module('hackrtrackrFrontendApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navgroup></navgroup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navgroup directive');
  }));
});

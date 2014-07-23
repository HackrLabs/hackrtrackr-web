'use strict';

describe('Directive: navitem', function () {

  // load the directive's module
  beforeEach(module('smartadminApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navitem></navitem>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navitem directive');
  }));
});

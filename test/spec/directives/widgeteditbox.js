'use strict';

describe('Directive: widgeteditbox', function () {

  // load the directive's module
  beforeEach(module('smartadminApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<widgeteditbox></widgeteditbox>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the widgeteditbox directive');
  }));
});
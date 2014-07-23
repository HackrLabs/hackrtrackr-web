'use strict';

describe('Directive: activitycontent', function () {

  // load the directive's module
  beforeEach(module('hackrtrackrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<activitycontent></activitycontent>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the activitycontent directive');
  }));
});

'use strict';

describe('Service: ribbon', function () {

  // load the service's module
  beforeEach(module('hackrtrackrApp'));

  // instantiate service
  var ribbon;
  beforeEach(inject(function (_ribbon_) {
    ribbon = _ribbon_;
  }));

  it('should do something', function () {
    expect(!!ribbon).toBe(true);
  });

});

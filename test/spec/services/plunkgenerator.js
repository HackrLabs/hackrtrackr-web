'use strict';

describe('Service: plunkgenerator', function () {

  // load the service's module
  beforeEach(module('hackrtrackrFrontendApp'));

  // instantiate service
  var plunkgenerator;
  beforeEach(inject(function (_plunkgenerator_) {
    plunkgenerator = _plunkgenerator_;
  }));

  it('should do something', function () {
    expect(!!plunkgenerator).toBe(true);
  });

});

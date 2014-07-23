'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

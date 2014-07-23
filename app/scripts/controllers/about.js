'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hackrtrackrApp
 */
angular.module('hackrtrackrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

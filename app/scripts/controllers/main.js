'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackrtrackrApp
 */
angular.module('hackrtrackrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

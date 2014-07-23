'use strict';

/**
 * @ngdoc function
 * @name smartadminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartadminApp
 */
angular.module('smartadminApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

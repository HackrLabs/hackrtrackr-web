'use strict';

/**
 * @ngdoc function
 * @name smartadminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the smartadminApp
 */
angular.module('smartadminApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name smartadminApp.controller:PlunkerCtrl
 * @description
 * # PlunkerCtrl
 * Controller of the smartadminApp
 */
angular.module('smartadminApp')
  .controller('PlunkerCtrl', function ($scope, PlunkGenerator) {
    $scope.content = {};

    $scope.edit = function (ngVersion, bsVersion, version, module) {
      plunkGenerator(ngVersion, bsVersion, version, module, $scope.content);
    };
  });

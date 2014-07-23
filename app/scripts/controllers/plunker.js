'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrApp.controller:PlunkerCtrl
 * @description
 * # PlunkerCtrl
 * Controller of the hackrtrackrApp
 */
angular.module('hackrtrackrApp')
  .controller('PlunkerCtrl', function ($scope, PlunkGenerator) {
    $scope.content = {};

    $scope.edit = function (ngVersion, bsVersion, version, module) {
      plunkGenerator(ngVersion, bsVersion, version, module, $scope.content);
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:PlunkerCtrl
 * @description
 * # PlunkerCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('PlunkerCtrl', function ($scope, PlunkGenerator) {
    $scope.content = {};

    $scope.edit = function (ngVersion, bsVersion, version, module) {
      plunkGenerator(ngVersion, bsVersion, version, module, $scope.content);
    };
  });

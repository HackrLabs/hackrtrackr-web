'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:NavgroupCtrl
 * @description
 * # NavgroupCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('NavGroupCtrl', function ($scope) {
  	$scope.active = false;
		$scope.hasIcon = angular.isDefined($scope.icon);
    $scope.hasIconCaption = angular.isDefined($scope.iconCaption);
    this.setActive = function(active) {
      $scope.active = active;
    }
  });

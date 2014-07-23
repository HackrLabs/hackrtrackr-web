'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrApp.controller:NavgroupCtrl
 * @description
 * # NavgroupCtrl
 * Controller of the hackrtrackrApp
 */
angular.module('hackrtrackrApp')
  .controller('NavGroupCtrl', function ($scope) {
  	$scope.active = false;
		$scope.hasIcon = angular.isDefined($scope.icon);
    $scope.hasIconCaption = angular.isDefined($scope.iconCaption);
    this.setActive = function(active) {
      $scope.active = active;
    }
  });

'use strict';

/**
 * @ngdoc function
 * @name smartadminApp.controller:NavgroupCtrl
 * @description
 * # NavgroupCtrl
 * Controller of the smartadminApp
 */
angular.module('smartadminApp')
  .controller('NavGroupCtrl', function ($scope) {
  	$scope.active = false;
		$scope.hasIcon = angular.isDefined($scope.icon);
    $scope.hasIconCaption = angular.isDefined($scope.iconCaption);
    this.setActive = function(active) {
      $scope.active = active;
    }
  });

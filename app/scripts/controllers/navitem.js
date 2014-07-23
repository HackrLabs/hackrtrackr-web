'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:NavitemCtrl
 * @description
 * # NavitemCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('NavItemCtrl', function ($scope, $rootScope, $location) {
    $scope.isChild = false;
		$scope.active = false;
		$scope.isActive = function (viewLocation) {
	        $scope.active = viewLocation === $location.path();
	        return $scope.active;
	    };

	    $scope.hasIcon = angular.isDefined($scope.icon);
	    $scope.hasIconCaption = angular.isDefined($scope.iconCaption);

	    $scope.getItemUrl = function(view) {
	    	if (angular.isDefined($scope.href)) return $scope.href;
	    	if (!angular.isDefined(view)) return '';
	    	return '#' + view;
	    };

	    $scope.getItemTarget = function() {
	    	return angular.isDefined($scope.target) ? $scope.target : '_self';
	    };
  });

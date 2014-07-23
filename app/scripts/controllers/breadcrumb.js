'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrApp.controller:BreadcrumbCtrl
 * @description
 * # BreadcrumbCtrl
 * Controller of the hackrtrackrApp
 */
angular.module('hackrtrackrApp')
  .controller('BreadcrumbCtrl', function ($scope) {
    $scope.breadcrumbs = [];
		$scope.$on('navItemSelected', function(name, crumbs) {
			$scope.setBreadcrumb(crumbs);
		});

		$scope.setBreadcrumb = function(crumbs) {
			$scope.breadcrumbs = crumbs;
		}
  });

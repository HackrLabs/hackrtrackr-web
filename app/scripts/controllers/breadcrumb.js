'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:BreadcrumbCtrl
 * @description
 * # BreadcrumbCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('BreadcrumbCtrl', function ($scope) {
    $scope.breadcrumbs = [];
		$scope.$on('navItemSelected', function(name, crumbs) {
			$scope.setBreadcrumb(crumbs);
		});

		$scope.setBreadcrumb = function(crumbs) {
			$scope.breadcrumbs = crumbs;
		}
  });

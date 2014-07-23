'use strict';

/**
 * @ngdoc function
 * @name smartadminApp.controller:BreadcrumbCtrl
 * @description
 * # BreadcrumbCtrl
 * Controller of the smartadminApp
 */
angular.module('smartadminApp')
  .controller('BreadcrumbCtrl', function ($scope) {
    $scope.breadcrumbs = [];
		$scope.$on('navItemSelected', function(name, crumbs) {
			$scope.setBreadcrumb(crumbs);
		});

		$scope.setBreadcrumb = function(crumbs) {
			$scope.breadcrumbs = crumbs;
		}
  });

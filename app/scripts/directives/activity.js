'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:activity
 * @description
 * # activity
 */
angular.module('smartadminApp')
  .directive('activity', function () {
    return {
			restrict: 'AE',
			replace: true,
			transclude: true,
			controller: 'ActivityCtrl',
			scope: {
				onRefresh: '=onrefresh',
			},
			template: '<span data-ng-transclude=""></span>'
		};

  });

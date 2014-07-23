'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:activity
 * @description
 * # activity
 */
angular.module('hackrtrackrApp')
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

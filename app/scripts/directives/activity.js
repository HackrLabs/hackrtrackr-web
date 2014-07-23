'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:activity
 * @description
 * # activity
 */
angular.module('hackrtrackrFrontendApp')
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

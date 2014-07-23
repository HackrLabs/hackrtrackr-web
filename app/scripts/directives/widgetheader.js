'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:widgetheader
 * @description
 * # widgetheader
 */
angular.module('smartadminApp')
  .directive('widgetHeader', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			scope: {
				title: '@',
				icon: '@'
			},
			template: '\
				<header>\
					<span class="widget-icon"> <i data-ng-class="icon"></i> </span>\
					<h2>{{ title }}</h2>\
					<span data-ng-transclude></span>\
				</header>'
		}

  });
'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:widgetbodytoolbar
 * @description
 * # widgetbodytoolbar
 */
angular.module('smartadminApp')
  .directive('widgetBodyToolbar', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			scope: {
				class: '@'
			},
			template: '<div class="widget-body-toolbar" data-ng-transclude=""></div>'
		}

  });

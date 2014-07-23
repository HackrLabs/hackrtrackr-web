'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:widgettoolbar
 * @description
 * # widgettoolbar
 */
angular.module('smartadminApp')
  .directive('widgetToolbar', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="widget-toolbar" data-ng-transclude=""></div>'
		}

  });

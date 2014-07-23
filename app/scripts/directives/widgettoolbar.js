'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:widgettoolbar
 * @description
 * # widgettoolbar
 */
angular.module('hackrtrackrApp')
  .directive('widgetToolbar', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="widget-toolbar" data-ng-transclude=""></div>'
		}

  });

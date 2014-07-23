'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:widgettoolbar
 * @description
 * # widgettoolbar
 */
angular.module('hackrtrackrFrontendApp')
  .directive('widgetToolbar', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="widget-toolbar" data-ng-transclude=""></div>'
		}

  });

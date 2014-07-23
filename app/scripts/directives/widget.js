'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:widget
 * @description
 * # widget
 */
angular.module('hackrtrackrFrontendApp')
  .directive('widget', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="jarviswidget" data-ng-transclude=""></div>'
		}
  });

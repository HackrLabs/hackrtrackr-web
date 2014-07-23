'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:widget
 * @description
 * # widget
 */
angular.module('hackrtrackrApp')
  .directive('widget', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="jarviswidget" data-ng-transclude=""></div>'
		}
  });

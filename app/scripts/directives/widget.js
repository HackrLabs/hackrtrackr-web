'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:widget
 * @description
 * # widget
 */
angular.module('smartadminApp')
  .directive('widget', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="jarviswidget" data-ng-transclude=""></div>'
		}
  });

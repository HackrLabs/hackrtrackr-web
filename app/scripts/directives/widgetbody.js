'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:widgetbody
 * @description
 * # widgetbody
 */
angular.module('smartadminApp')
  .directive('widgetBody', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div data-ng-transclude=""></div>'
		}

  });

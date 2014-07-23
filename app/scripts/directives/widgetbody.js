'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:widgetbody
 * @description
 * # widgetbody
 */
angular.module('hackrtrackrApp')
  .directive('widgetBody', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div data-ng-transclude=""></div>'
		}

  });

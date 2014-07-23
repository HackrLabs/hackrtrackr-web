'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:widgetbody
 * @description
 * # widgetbody
 */
angular.module('hackrtrackrFrontendApp')
  .directive('widgetBody', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div data-ng-transclude=""></div>'
		}

  });

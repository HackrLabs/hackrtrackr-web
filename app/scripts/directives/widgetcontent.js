'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:widgetcontent
 * @description
 * # widgetcontent
 */
angular.module('hackrtrackrFrontendApp')
  .directive('widgetContent', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="widget-body" data-ng-transclude=""></div>'
		}

  });

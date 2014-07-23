'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:widgetcontent
 * @description
 * # widgetcontent
 */
angular.module('hackrtrackrApp')
  .directive('widgetContent', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="widget-body" data-ng-transclude=""></div>'
		}

  });

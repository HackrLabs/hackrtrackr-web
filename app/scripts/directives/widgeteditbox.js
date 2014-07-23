'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:widgeteditbox
 * @description
 * # widgeteditbox
 */
angular.module('hackrtrackrFrontendApp')
  .directive('widgetEditBox', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="jarviswidget-editbox" data-ng-transclude=""></div>'
		}

  });

'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:widgeteditbox
 * @description
 * # widgeteditbox
 */
angular.module('hackrtrackrApp')
  .directive('widgetEditBox', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="jarviswidget-editbox" data-ng-transclude=""></div>'
		}

  });

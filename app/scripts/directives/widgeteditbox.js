'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:widgeteditbox
 * @description
 * # widgeteditbox
 */
angular.module('smartadminApp')
  .directive('widgetEditBox', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="jarviswidget-editbox" data-ng-transclude=""></div>'
		}

  });

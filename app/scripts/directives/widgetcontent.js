'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:widgetcontent
 * @description
 * # widgetcontent
 */
angular.module('smartadminApp')
  .directive('widgetContent', function () {
    return {
			restrict: 'AE',
			transclude: true,
			replace: true,
			template: '<div class="widget-body" data-ng-transclude=""></div>'
		}

  });

'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:body
 * @description
 * # body
 */
angular.module('hackrtrackrFrontendApp')
  .directive('body', function () {
    return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				element.on('click', 'a[href="#"], [data-toggle]', function(e) {
					e.preventDefault();
				})
			}
		}
  });

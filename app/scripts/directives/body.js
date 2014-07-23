'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:body
 * @description
 * # body
 */
angular.module('smartadminApp')
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

'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:header
 * @description
 * # header
 */
angular.module('hackrtrackrApp')
  .directive('header', function () {
    return {
			restrict: 'EA',
			link: function(scope, element, attrs) {
				// SHOW & HIDE MOBILE SEARCH FIELD
				angular.element('#search-mobile').click(function() {
					$.root_.addClass('search-mobile');
				});

				angular.element('#cancel-search-js').click(function() {
					$.root_.removeClass('search-mobile');
				});
			}
		};

  });

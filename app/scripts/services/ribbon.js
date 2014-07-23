'use strict';

/**
 * @ngdoc service
 * @name hackrtrackrApp.ribbon
 * @description
 * # ribbon
 * Factory in the hackrtrackrApp.
 */
angular.module('hackrtrackrApp')
  .factory('Ribbon', function ($rootScope) {
    var ribbon = {
			currentBreadcrumb: [],
			updateBreadcrumb: function(crumbs) {
				crumbs.push('Home');
				var breadCrumb = crumbs.reverse();
				ribbon.currentBreadcrumb = breadCrumb;
				$rootScope.$broadcast('navItemSelected', breadCrumb);
			}
		};

		return ribbon;

  });

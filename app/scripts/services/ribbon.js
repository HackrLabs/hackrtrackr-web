'use strict';

/**
 * @ngdoc service
 * @name hackrtrackrFrontendApp.ribbon
 * @description
 * # ribbon
 * Factory in the hackrtrackrFrontendApp.
 */
angular.module('hackrtrackrFrontendApp')
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

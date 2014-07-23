'use strict';

/**
 * @ngdoc service
 * @name smartadminApp.ribbon
 * @description
 * # ribbon
 * Factory in the smartadminApp.
 */
angular.module('smartadminApp')
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

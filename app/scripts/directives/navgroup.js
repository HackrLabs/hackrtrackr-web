'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:navgroup
 * @description
 * # navgroup
 */
angular.module('smartadminApp')
  .directive('navGroup', function () {
    	return {
			restrict: 'AE',
			controller: 'NavGroupCtrl',
			transclude: true,
			replace: true,
			scope: {
				icon: '@',
				title: '@',
				iconCaption: '@',
				active: '=?'
			},
			template: '\
				<li data-ng-class="{active: active}">\
					<a href="">\
						<i data-ng-if="hasIcon" class="{{ icon }}"><em data-ng-if="hasIconCaption"> {{ iconCaption }} </em></i>\
						<span class="menu-item-parent" data-localize="{{ title }}">{{ title }}</span>\
					</a>\
					<ul data-ng-transclude=""></ul>\
				</li>',

		};

  });

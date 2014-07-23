'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:navitem
 * @description
 * # navitem
 */
angular.module('smartadminApp')
  .directive('navItem', function ($window, Ribbon) {
    return {
			require: ['^navigation', '^?navGroup'],
			restrict: 'AE',
			controller: 'NavItemCtrl',
			scope: {
				title: '@',
				view: '@',
				icon: '@',
				iconCaption: '@',
				href: '@',
				target: '@'
			},
			link: function(scope, element, attrs, parentCtrls) {
				var navCtrl = parentCtrls[0],
					navgroupCtrl = parentCtrls[1]

				scope.$watch('active', function(newVal, oldVal) {
					if (newVal) {
						if (angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(true);
						$window.document.title = scope.title;
						scope.setBreadcrumb();
					} else {
						if (angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(false);
					}
				});

				scope.openParents = scope.isActive(scope.view);
				scope.isChild = angular.isDefined(navgroupCtrl);

				scope.setBreadcrumb = function() {
	    			var crumbs = [];
	    			crumbs.push(scope.title);
	    			// get parent menus
					var test = element.parents('nav li').each(function() {
						var el = angular.element(this);
						var parent = el.find('.menu-item-parent:eq(0)');
						crumbs.push(parent.data('localize').trim());
						if (scope.openParents) {
							// open menu on first load
							parent.trigger('click');
						}
					});
					// this should be only fired upon first load so let's set this to false now
					scope.openParents = false;
					Ribbon.updateBreadcrumb(crumbs);
	    		};

	    		element.on('click', 'a[href!="#"]', function() {
	    			if ($.root_.hasClass('mobile-view-activated')) {
	    				$.root_.removeClass('hidden-menu');
	    			}
	    		});

			},
			transclude: true,
			replace: true,
			template: '\
				<li data-ng-class="{active: isActive(view)}">\
					<a href="{{ getItemUrl(view) }}" target="{{ getItemTarget() }}" title="{{ title }}">\
						<i data-ng-if="hasIcon" class="{{ icon }}"><em data-ng-if="hasIconCaption"> {{ iconCaption }} </em></i>\
						<span ng-class="{\'menu-item-parent\': !isChild}" data-localize="{{ title }}"> {{ title }} </span>\
						<span data-ng-transclude=""></span>\
					</a>\
				</li>'
		};
  });

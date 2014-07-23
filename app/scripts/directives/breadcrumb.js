'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:breadcrumb
 * @description
 * # breadcrumb
 */
angular.module('smartadminApp')
  .directive('breadcrumb', function (Ribbon, Localize, $compile) {
    return {
			restrict: 'AE',
			controller: 'BreadcrumbCtrl',
			replace: true,
			link: function(scope, element, attrs) {
				scope.$watch('breadcrumbs', function(newVal, oldVal) {
					if (newVal !== oldVal) {
						// update DOM
						scope.updateDOM();
					}
				})
				scope.updateDOM = function() {
					element.empty();
					angular.forEach(scope.breadcrumbs, function(crumb) {
						var li = angular.element('<li data-localize="' + crumb + '">' + crumb + '</li>');
						li.text(Localize.localizeText(crumb));

						$compile(li)(scope);
						element.append(li);
					});
				};

				// set the current breadcrumb on load
				scope.setBreadcrumb(Ribbon.currentBreadcrumb);
				scope.updateDOM();
			},
			template: '<ol class="breadcrumb"></ol>'
		}
  });

'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:activityitem
 * @description
 * # activityitem
 */
angular.module('smartadminApp')
  .directive('activityItem', function () {
    return {
			restrict: 'AE',
			require: ['^activity', '^activityContent'],
			scope: {
				src: '=',
				onLoad: '=onload',
				active: '=?'
			},
			controller: function() {

			},
			transclude: true,
			replace: true,
			template: '\
				<label class="btn btn-default" data-ng-click="loadItem()" ng-class="{active: active}">\
					<input type="radio" name="activity">\
					<span data-ng-transclude=""></span>\
				</label>',
			link: function(scope, element, attrs, parentCtrls) {
				var activityCtrl = parentCtrls[0],
					contentCtrl = parentCtrls[1];

				scope.$watch('active', function(active) {
					if (active) {
						activityCtrl.loadItem(scope, function(content) {
							contentCtrl.loadContent(content);
						});
					}
				});
				activityCtrl.addItem(scope);

				scope.loadItem = function() {
					scope.active = true;
				};
			}
		};

  });

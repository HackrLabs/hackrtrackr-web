'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:activitycontent
 * @description
 * # activitycontent
 */
angular.module('smartadminApp')
  .directive('activityContent', function ($compile) {
    return {
			restrict: 'AE',
			transclude: true,
			require: '^activity',
			replace: true,
			scope: {
				footer: '=?'
			},
			controller: 'ActivityContentCtrl',
			template: '\
				<div class="ajax-dropdown">\
					<div class="btn-group btn-group-justified" data-toggle="buttons" data-ng-transclude=""></div>\
					<div class="ajax-notifications custom-scroll">\
						<div class="alert alert-transparent">\
							<h4>Click a button to show messages here</h4>\
							This blank page message helps protect your privacy, or you can show the first message here automatically.\
						</div>\
						<i class="fa fa-lock fa-4x fa-border"></i>\
					</div>\
					<span> {{ footer }}\
						<button type="button" data-loading-text="Loading..." data-ng-click="refresh($event)" class="btn btn-xs btn-default pull-right" data-activty-refresh-button="">\
						<i class="fa fa-refresh"></i>\
						</button>\
					</span>\
				</div>',
			link: function(scope, element, attrs, activityCtrl) {
				scope.refresh = function(e) {
					activityCtrl.refresh(e);
				};

				scope.$watch('currentContent', function(newContent, oldContent) {
					if (newContent !== oldContent) {
						var el = element.find('.ajax-notifications').html(newContent);
						$compile(el)(scope);
					}
				});
			}
		};

  });

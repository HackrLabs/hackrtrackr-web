'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:activitybutton
 * @description
 * # activitybutton
 */
angular.module('hackrtrackrFrontendApp')
  .directive('activityButton', function () {
    return {
			restrict: 'AE',
			require: '^activity',
			replace: true,
			transclude: true,
			controller: function($scope) {

			},
			scope: {
				icon: '@',
				total: '='
			},
			template: '\
					<span id="activity" class="activity-dropdown">\
						<i ng-class="icon"></i>\
						<b class="badge"> {{ total }} </b>\
					</span>',
			link: function(scope, element, attrs, activityCtrl) {

				attrs.$observe('icon', function(value) {
					if (!angular.isDefined(value))
						scope.icon = 'fa fa-user';
				});

				element.on('click', function(e) {
					var $this = $(this);

					if ($this.find('.badge').hasClass('bg-color-red')) {
						$this.find('.badge').removeClassPrefix('bg-color-');
						$this.find('.badge').text("0");
						// console.log("Ajax call for activity")
					}

					if (!$this.next('.ajax-dropdown').is(':visible')) {
						$this.next('.ajax-dropdown').fadeIn(150);
						$this.addClass('active');
					} else {
						$this.next('.ajax-dropdown').fadeOut(150);
						$this.removeClass('active');
					}

					var mytest = $this.next('.ajax-dropdown').find('.btn-group > .active > input').attr('id');
					//console.log(mytest)

					e.preventDefault();
				});

				if (scope.total > 0) {
					var $badge = element.find('.badge');
					$badge.addClass("bg-color-red bounceIn animated");
				}
			}
		};

  });

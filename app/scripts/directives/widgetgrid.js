'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:widgetgrid
 * @description
 * # widgetgrid
 */
angular.module('hackrtrackrApp')
  .directive('widgetGrid', function () {
    return {
			restrict: 'AE',
			link: function(scope, element, attrs) {
				scope.setup_widget_desktop = function() {
					if ($.fn.jarvisWidgets && $.enableJarvisWidgets) {
						element.jarvisWidgets({
							grid : 'article',
							widgets : '.jarviswidget',
							localStorage : true,
							deleteSettingsKey : '#deletesettingskey-options',
							settingsKeyLabel : 'Reset settings?',
							deletePositionKey : '#deletepositionkey-options',
							positionKeyLabel : 'Reset position?',
							sortable : true,
							buttonsHidden : false,
							// toggle button
							toggleButton : true,
							toggleClass : 'fa fa-minus | fa fa-plus',
							toggleSpeed : 200,
							onToggle : function() {
							},
							// delete btn
							deleteButton : true,
							deleteClass : 'fa fa-times',
							deleteSpeed : 200,
							onDelete : function() {
							},
							// edit btn
							editButton : true,
							editPlaceholder : '.jarviswidget-editbox',
							editClass : 'fa fa-cog | fa fa-save',
							editSpeed : 200,
							onEdit : function() {
							},
							// color button
							colorButton : true,
							// full screen
							fullscreenButton : true,
							fullscreenClass : 'fa fa-expand | fa fa-compress',
							fullscreenDiff : 3,
							onFullscreen : function() {
							},
							// custom btn
							customButton : false,
							customClass : 'folder-10 | next-10',
							customStart : function() {
								alert('Hello you, this is a custom button...');
							},
							customEnd : function() {
								alert('bye, till next time...');
							},
							// order
							buttonOrder : '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
							opacity : 1.0,
							dragHandle : '> header',
							placeholderClass : 'jarviswidget-placeholder',
							indicator : true,
							indicatorTime : 600,
							ajax : true,
							timestampPlaceholder : '.jarviswidget-timestamp',
							timestampFormat : 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
							refreshButton : true,
							refreshButtonClass : 'fa fa-refresh',
							labelError : 'Sorry but there was a error:',
							labelUpdated : 'Last Update:',
							labelRefresh : 'Refresh',
							labelDelete : 'Delete widget:',
							afterLoad : function() {
							},
							rtl : false, // best not to toggle this!
							onChange : function() {

							},
							onSave : function() {

							},
							ajaxnav : $.navAsAjax // declears how the localstorage should be saved (HTML or AJAX page)

						});
					}
				}

				scope.setup_widget_mobile = function() {
					if ($.enableMobileWidgets && $.enableJarvisWidgets) {
						scope.setup_widgets_desktop();
					}
				}

				if ($.device === "desktop") {
					scope.setup_widget_desktop();
				} else {
					scope.setup_widget_mobile();
				}

			}
		}

  });

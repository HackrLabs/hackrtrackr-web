'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:ActivitycontentCtrl
 * @description
 * # ActivitycontentCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('ActivityContentCtrl', function ($scope) {
    var ctrl = this;
		$scope.currentContent = '';
		ctrl.loadContent = function(content) {
			$scope.currentContent = content;
		}
  });

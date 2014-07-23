'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrApp.controller:ActivitycontentCtrl
 * @description
 * # ActivitycontentCtrl
 * Controller of the hackrtrackrApp
 */
angular.module('hackrtrackrApp')
  .controller('ActivityContentCtrl', function ($scope) {
    var ctrl = this;
		$scope.currentContent = '';
		ctrl.loadContent = function(content) {
			$scope.currentContent = content;
		}
  });

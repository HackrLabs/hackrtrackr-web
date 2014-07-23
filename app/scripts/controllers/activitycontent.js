'use strict';

/**
 * @ngdoc function
 * @name smartadminApp.controller:ActivitycontentCtrl
 * @description
 * # ActivitycontentCtrl
 * Controller of the smartadminApp
 */
angular.module('smartadminApp')
  .controller('ActivityContentCtrl', function ($scope) {
    var ctrl = this;
		$scope.currentContent = '';
		ctrl.loadContent = function(content) {
			$scope.currentContent = content;
		}
  });

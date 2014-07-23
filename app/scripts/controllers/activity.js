'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('ActivityCtrl', function ($scope, $http) {
    var ctrl = this,
    items = ctrl.items = $scope.items = [];

		ctrl.loadItem = function(loadedItem, callback) {
			angular.forEach(items, function(item) {
		      	if (item.active && item !== loadedItem) {
		        	item.active = false;
		        	//item.onDeselect();
		      	}
		    });

			loadedItem.active = true;
			if (angular.isDefined(loadedItem.onLoad)) {
				loadedItem.onLoad(loadedItem);
			}

			$http.get(loadedItem.src).then(function(result) {
				var content = result.data;
				if (angular.isDefined(callback)) {
					callback(content);
				}
			});
		};

		ctrl.addItem = function(item) {
			items.push(item);
			if (!angular.isDefined(item.active)) {
				// set the default
				item.active = false;
			} else if (item.active) {
				ctrl.loadItem(item);
			}
		};

		ctrl.refresh = function(e) {
			var btn = angular.element(e.currentTarget);
			btn.button('loading');

			if (angular.isDefined($scope.onRefresh)) {
				$scope.onRefresh($scope, function() {
					btn.button('reset');
				});
			} else {
				btn.button('reset');
			}
		};

  });

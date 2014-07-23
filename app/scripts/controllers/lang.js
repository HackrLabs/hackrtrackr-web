'use strict';

/**
 * @ngdoc function
 * @name hackrtrackrFrontendApp.controller:LangCtrl
 * @description
 * # LangCtrl
 * Controller of the hackrtrackrFrontendApp
 */
angular.module('hackrtrackrFrontendApp')
  .controller('LangCtrl', function ($scope, Settings, Localize) {
    $scope.languages = Settings.languages;
		$scope.currentLang = Settings.currentLang;
		$scope.setLang = function(lang) {
      Settings.currentLang = lang;
      $scope.currentLang = lang;
      Localize.setLang(lang);
    }

		// set the default language
		$scope.setLang($scope.currentLang);
  });

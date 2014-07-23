'use strict';

/**
 * @ngdoc service
 * @name hackrtrackrApp.localize
 * @description
 * # localize
 * Factory in the hackrtrackrApp.
 */
angular.module('hackrtrackrApp')
  .factory('Localize', function ($http, $rootScope, $window) {
    var localize = {
			currentLocaleData: {},
			currentLang: {},
			setLang: function(lang) {
				$http({method: 'GET', url: localize.getLangUrl(lang), cache: false})
				.success(function(data) {
					localize.currentLocaleData = data;
					localize.currentLang = lang;
					$rootScope.$broadcast('localizeLanguageChanged');
				}).error(function(data) {
					console.log('Error updating language!');
				})
			},
			getLangUrl: function(lang) {
				return 'scripts/langs/' + lang.langCode + '.js';
			},

			localizeText: function(sourceText) {
				return localize.currentLocaleData[sourceText];
			}
		};

		return localize;
  });

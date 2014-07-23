'use strict';

/**
 * @ngdoc service
 * @name hackrtrackrFrontendApp.settings
 * @description
 * # settings
 * Factory in the hackrtrackrFrontendApp.
 */
angular.module('hackrtrackrFrontendApp')
  .factory('Settings', function () {
    var settings = {
			languages: [
				{
					language: 'English',
					translation: 'English',
					langCode: 'en',
					flagCode: 'us'
				},
				{
					language: 'Espanish',
					translation: 'Espanish',
					langCode: 'es',
					flagCode: 'es'
				},
				{
					language: 'German',
					translation: 'Deutsch',
					langCode: 'de',
					flagCode: 'de'
				},
				{
					language: 'Korean',
					translation: '한국의',
					langCode: 'ko',
					flagCode: 'kr'
				},
				{
					language: 'French',
					translation: 'français',
					langCode: 'fr',
					flagCode: 'fr'
				},
				{
					language: 'Portuguese',
					translation: 'português',
					langCode: 'pt',
					flagCode: 'br'
				},
				{
					language: 'Russian',
					translation: 'русский',
					langCode: 'ru',
					flagCode: 'ru'
				},
				{
					language: 'Chinese',
					translation: '中國的',
					langCode: 'zh',
					flagCode: 'cn'
				}
			],
			
		};

		return settings;
	
  });

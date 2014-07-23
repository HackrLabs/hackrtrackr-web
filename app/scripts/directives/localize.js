'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:localize
 * @description
 * # localize
 */
angular.module('hackrtrackrFrontendApp')
  .directive('localize', function (Localize) {
    return {
			restrict: 'A',
			scope: {
				sourceText: '@localize'
			},
			link: function(scope, element, attrs) {
				scope.$on('localizeLanguageChanged', function() {
					var localizedText = Localize.localizeText(scope.sourceText);
					if (element.is('input, textarea')) element.attr('placeholder', localizedText)
					else element.text(localizedText);
				});
			}
		}
  });

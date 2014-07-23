'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrFrontendApp.directive:plunkercontent
 * @description
 * # plunkercontent
 */
angular.module('hackrtrackrFrontendApp')
  .directive('plunkerContent', function () {
    return {
      link:function (scope, element, attrs) {
        scope.content[attrs.plunkerContent] = element.text().trim();
      }
    }

  });

'use strict';

/**
 * @ngdoc directive
 * @name hackrtrackrApp.directive:plunkercontent
 * @description
 * # plunkercontent
 */
angular.module('hackrtrackrApp')
  .directive('plunkerContent', function () {
    return {
      link:function (scope, element, attrs) {
        scope.content[attrs.plunkerContent] = element.text().trim();
      }
    }

  });

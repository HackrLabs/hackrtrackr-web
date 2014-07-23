'use strict';

/**
 * @ngdoc directive
 * @name smartadminApp.directive:plunkercontent
 * @description
 * # plunkercontent
 */
angular.module('smartadminApp')
  .directive('plunkerContent', function () {
    return {
      link:function (scope, element, attrs) {
        scope.content[attrs.plunkerContent] = element.text().trim();
      }
    }

  });

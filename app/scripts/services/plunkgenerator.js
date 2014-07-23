'use strict';

/**
 * @ngdoc service
 * @name smartadminApp.plunkgenerator
 * @description
 * # plunkgenerator
 * Factory in the smartadminApp.
 */
angular.module('smartadminApp')
  .factory('PlunkGenerator', function ($document) {
    return function (ngVersion, bsVersion, version, module, content) {

      var form = angular.element('<form style="display: none;" method="post" action="http://plnkr.co/edit/?p=preview" target="_blank"></form>');
      var addField = function (name, value) {
        var input = angular.element('<input type="hidden" name="' + name + '">');
        input.attr('value', value);
        form.append(input);
      };

      var indexContent = function (content, version) {
        return '<!doctype html>\n' +
          '<html ng-app="plunker">\n' +
          '  <head>\n' +
          '    <script src="//ajax.googleapis.com/ajax/libs/angularjs/'+ngVersion+'/angular.js"></script>\n' +
          '    <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-'+version+'.js"></script>\n' +
          '    <script src="example.js"></script>\n' +
          '    <link href="//netdna.bootstrapcdn.com/bootstrap/'+bsVersion+'/css/bootstrap.min.css" rel="stylesheet">\n' +
          '  </head>\n' +
          '  <body>\n\n' +
          content + '\n' +
          '  </body>\n' +
          '</html>\n';
      };

      var scriptContent = function(content) {
        return "angular.module('plunker', ['ui.bootstrap']);" + "\n" + content;
      };

      addField('description', 'http://angular-ui.github.io/bootstrap/');
      addField('files[index.html]', indexContent(content.markup, version));
      addField('files[example.js]', scriptContent(content.javascript));

      $document.find('body').append(form);
      form[0].submit();
      form.remove();
    };
  });
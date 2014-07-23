'use strict';

/**
 * @ngdoc overview
 * @name hackrtrackrFrontendApp
 * @description
 * # hackrtrackrFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('hackrtrackrFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-flot',
    'easypiechart',
    'sparkline',
    'ChartAngular'
  ])
  .config(function ($routeProvider, $provide) {
    $routeProvider
      .when('/:page', {
        templateUrl: function($routeParams){
          return 'views/' + $routeParams.page + '.html';
        },
        controller: 'PageViewCtrl'
      })
      .when('/:page/:child*', {
        templateUrl: function($routeParams){
          return 'views/' + $routeParams.page + '/' + $routeParams.child + '.html';
        },
        controller: 'PageViewCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });

      $provide.decorator('$log', function($delegate){
        function logger(){
          logger.info.apply(logger, arguments)
        }

        angular.extend(logger, $delegate)
        return logger;
      })
  })
  .run(function($rootScope, Settings){
    Settings.currentLang = Settings.languages[0]
  })

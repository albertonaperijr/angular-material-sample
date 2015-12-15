'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialSampleApp
 * @description
 * # angularMaterialSampleApp
 *
 * Main module of the application.
 */
 var sampleApp = angular.module('angularMaterialSampleApp', [
  'ngAnimate',
  'ngCookies',
  'ngMaterial',
  // 'ngResource',
  // 'ngRoute',
  'ngSanitize',
  // 'ngScrollbar',
  'ngScrollbars',
  // 'ngTouch'
  'ui.router'
  ]);

 sampleApp.config(['$mdThemingProvider', 'ScrollBarsProvider', function($mdThemingProvider, ScrollBarsProvider) {

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');

  ScrollBarsProvider.defaults = {
      scrollButtons: {
          scrollAmount: 'auto', // scroll amount when button pressed
          // enable: true // enable scrolling buttons by default
      },
      axis: 'yx', // enable 2 axis scrollbars by default,
      autoHideScrollbar: true,
      // theme: 'minimal',
      advanced: {
          updateOnContentResize: true
      },
      setHeight: '100%',
      scrollInertia: 0
  };

  // $routeProvider
  // .when('/', {
  //   templateUrl: 'views/main.html',
  //   controller: 'MainCtrl',
  //   controllerAs: 'mainCtrl'
  // })
  // .when('/about', {
  //   templateUrl: 'views/about.html',
  //   controller: 'AboutCtrl',
  //   controllerAs: 'aboutCtrl'
  // })
  // .otherwise({
  //   redirectTo: '/'
  // });

}]);

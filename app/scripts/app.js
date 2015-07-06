'use strict';

/**
 * @ngdoc overview
 * @name dazzlehubApp
 * @description
 * # dazzlehubApp
 *
 * Main module of the application.
 */
angular
  .module('dazzlehubApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/date-picker', {
        templateUrl: 'views/date-picker.html',
        controller: 'DatePickerCtrl',
        controllerAs: 'datepicker'
      });
      .when('/product-opener', {
        templateUrl: 'views/product-opener.html',
        controller: 'ProductOpenerCtrl',
        controllerAs: 'productopener'
      });
      .when('/make-csvs', {
        templateUrl: 'views/make-csvs.html',
        controller: 'MakeCsvsCtrl',
        controllerAs: 'makecsvs'
      });
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

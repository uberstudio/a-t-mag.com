'use strict';

// Declare app level module which depends on filters, and services

angular.module('atMag', [
  'atMag.controllers',
  'atMag.filters',
  'atMag.services',
  'atMag.directives',
  'ngRoute',
  'ngAnimate'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/main'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});

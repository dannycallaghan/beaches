'use strict';

angular.module('beachesApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/list.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
'use strict';

// Declare app level module which depends on views, and components
var cookBookApp = angular.module('cookBookApp', [ 'ngRoute' ]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
}]);

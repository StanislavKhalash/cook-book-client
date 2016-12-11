'use strict';

// Declare app level module which depends on views, and components
var cookBookApp = angular.module('cookBookApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'DashboardController'
        })
        .when('/foods', {
            templateUrl: 'partials/foods.html',
            controller: 'FoodsController'
        })
        .when('/recipes', {
            templateUrl: 'partials/recipes.html',
            controller: 'RecipesController'
        })
        .otherwise({redirectTo: '/dashboard'});
}]);

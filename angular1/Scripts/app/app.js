

var app = angular.module('myApp', ['ui.router','ngResource']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/brand");

    $stateProvider.state('view1', { url: '/view1', templateUrl: 'Partials/home.html', controller: 'myController1' });
    $stateProvider.state('view2', { url: '/view2', templateUrl: 'Partials/cart.html', controller: 'myController1' });
    $stateProvider.state('brand', { url: '/brand', templateUrl: 'Partials/welcome.html' });
});
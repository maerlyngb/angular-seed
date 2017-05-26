'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'view1',
  'view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.
  when('/view1', {
    template: '<view1></view1>'
  }).
    when('/view2', {
    template: '<view2></view2>'
  }).
  otherwise('/view1');

  $routeProvider.otherwise({
    redirectTo: '/view1'
  });

}]);
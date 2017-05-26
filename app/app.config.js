'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/view1', {
          template: '<phone-list></phone-list>'
        }).
        when('/view2', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/view1');
    }
  ]);

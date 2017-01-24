'use strict';

angular.
  module('bookApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/books', {
          template: '<book-list></book-list>'
        }).
        when('/books/:id', {
          template: '<book-data></book-data>'
        }).
        when('/create-book', {
          template: '<create-book></create-book>'
        }).
        otherwise('/books');
    }
  ]);

'use strict';

/*angular.module('BookData').controller('BookDataController', function($scope, $http) {
	$http.get('books/books.json').then(function(response) {
        $scope.booklist = response.data;
    });
    
    for (var $scope.book in $scope.booklist) 
    {
        console.log($scope.book.id);
    	$http.get('books/' + $scope.book.id + '.json').then(function(response) {
        	$scope.books.append(response.data);
        })
    }
});*/

angular.
  	module('bookData').
  	component('bookData', {
  		templateUrl: 'book-data/book-data.template.html',
    	controller: ['$http', '$routeParams', function BookDataController($http, $routeParams) {
        	var self = this; 
        	$http.get('books/' + $routeParams.id + '.json').then(function(response) {
            	self.book = response.data;
                //console.log(self.book.author);
        	});
        }]
    });
'use strict';

angular.module('BookEdit').controller('BookEditController', function($scope, $http) {
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
});
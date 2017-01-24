'use strict';


/*angular.
  module('BookApp').
  component('BookList', {
    controller: ['$http', function BookListController($http) {
        var self = this;
        $http.get('books/books.json').then(function(response) {
            self.booklist = response.data;
        });
        self.books = [];
        for (var book in self.booklist) 
        {   
            $http.get('books/' + book.id + '.json').then(function(response) {
                self.books.append(response.data);
            });
        }
    }]
});*/


angular.
    module('bookList').
    component('bookList', {
        templateUrl: 'book-list/book-list.template.html',
        controller: ['$http', function BookListController($http) {
            var self = this;
	        $http.get('books/books.json').then(function(response) {
                self.booklist = response.data;
            });
        }]
    });

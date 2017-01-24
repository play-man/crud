'use strict';

angular.
    module('createBook').
    component('createBook', {
        templateUrl: 'create-book/create-book.template.html',
        controller: ['$http', function CreateBookController($http) {
        	var self = this;

			self.save = function(book, createForm) {
				var text = '{"name": "' + book.name + '",' +
			    '"author": "' + book.author + '",'
			    '"year": "' + book.year + '",' +
			    '"genre": "' + book.genre + '",' +
			    '"text": "' + book.text + '"}';

			    console.log(text);
			    var new_book = JSON.parse(text);
				$http.post('books/books.json', new_book).then(response)
				{
	        		console.log("Success!");
	        	};
			}; 	
        }]
    });
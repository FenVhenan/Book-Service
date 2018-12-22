var ViewModel = function () {
    var self = this;
    self.books = ko.observableArray();
    self.error = ko.observable();

    var booksUri = '/api/books/';

    function ajaxHelper(uri, method, data) {
        self.error('');//clear the error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
        }).fail(function (jqXHR, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getAllBooks() {
        ajaxHelper(booksUri, 'GET').done(function (data) {
            self.books(data);
        });
    }

    //fetch the initial data
    getAllBooks();

    //book details

    self.detail = ko.observable();

    self.getBookDetail = function (item) {
        ajaxHelper(booksUri + item.Id, 'GET').done(function (data) {
            self.detail(data);
        });
    };

    //add new book

    self.authors = ko.observableArray();
    self.newBook = {
        Author: ko.observable(),
        Genre: ko.observable(),
        Price: ko.observable(),
        Title: ko.observable(),
        Year: ko.observable()
    };
    
    function getAuthors() {
        ajaxHelper(authorsUri, 'GET').done(function (data) {
            self.authors(data);
        });
    }
    self.addBook = function (formElement) {
        var book = {
            AuthorId: self.newBook.Author().Id,
            Genre: self.newBook.Genre(),
            Price: self.newBook.Price(),
            Title: self.newBook.Title(),
            Year: self.newBook.Year()
        };
        ajaxHelper(booksUri, 'POST', book).done(function (item) {
            self.books.push(item);
        });
    };
    


    

    //authors
    var authorsUri = '/api/authors/';

    function getAllAuthors() {
        ajaxHelper(authorsUri, 'GET').done(function (data) {
            self.authors(data);
        });
    }

    //fetch the initial data
    getAllAuthors();

    //adding a new author

    self.newAuthor = {
        Id: ko.observable(),
        Name: ko.observable()
    };
    self.addAuthor = function (formElement) {
        var author = {
            Id: self.newAuthor.Author.Id(),
            Name: self.newAuthor.Name()
        };
        ajaxHelper(authorsUri, 'POST', author).done(function (item) {
            self.authors.push(item);
        });
    };

    getAuthors();
};
ko.applyBindings(new ViewModel());
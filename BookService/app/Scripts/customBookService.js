(function (app) {
    var customBookService = function ($http, bookApiUrl){
        var getAll = function () {
            return $http.get(bookApiUrl);
        };
    var getById = function (id) {
        return $http.get(bookApiUrl + id);
    };
    var update = function (book) {
        return $http.put(bookApiUrl + book.Id, book);
    };
    var create = function (book) {
        return $http.post(bookApiUrl, book);
        };
        var destroy = function (book) {
            return $http.delete(bookApiUrl + book.Id);
        };

        return {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            delete: destroy
        };
    };
    app.factory("customBookService", customBookService);
}(angular.module("bookService")))
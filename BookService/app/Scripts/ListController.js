(function (app) {
    var ListController = function ($scope, customBookService) {
        customBookService
            .getAll()
            .then(function (data) {
                $scope.books = data;
            });
    };

    ListController.$inject = ["$scope", "customBookService"];

    app.controller("ListController", ListController);
}(angular.module("bookService")));
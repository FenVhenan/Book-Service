(function (app) {
    var DetailsController = function ($scope, customBookService, $routeParams) {
        var id = $routeParams.id;

        customBookService
            .getById(id)
            .then(function (data) {
                $scope.book = data;
            });
    };

    app.controller("DetailsController", DetailsController);
}(angular.module("bookService")));
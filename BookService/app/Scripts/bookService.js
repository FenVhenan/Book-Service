(function () {
    var app = angular.module("bookService", ["ngRoute"]); 

    var config = function ($routeProvider) {
        $routeProvider
            .when("/list",
                { templateUrl: "app/Views/list.html" })
            .when("/details/:id",
                { templateUrl: "app/Views/details.html" })
            .otherwise(
                { redirectTo: "/list" });
    };

    app.config(config);
    app.constant("bookApiUrl", "/api/book/");
}());
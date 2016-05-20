var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.controller("homeController", function ($scope) {
});

app.controller("flatController", function ($scope) {
});

app.config(function($routeProvider){
        $routeProvider.when('/',
        {
            templateUrl:'views/home.html',
            controller:'homeController'
        });
        $routeProvider.when('/nedvizhimost',
        {
            templateUrl:'views/nedvizhimost.html',
            controller:'nedvizhimostController'
        });

        $routeProvider.when('/sale-realty/flats',
        {
            templateUrl:'views/sale-realty/flats.html',
            controller:'flatController'
        });

        $routeProvider.otherwise({redirectTo: '/'});
});

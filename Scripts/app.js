var app = angular.module('app', ['ngRoute']);

app.controller("homeController", function ($scope) {

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
        $routeProvider.otherwise({redirectTo: '/'});
});

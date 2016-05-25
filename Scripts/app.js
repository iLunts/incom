var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
              // provide any default options you want
                var defaultOptions = {
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                $(element).owlCarousel(defaultOptions);
            };
        }
    };
})
.directive('owlCarouselItem', [function() {
    return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
            if(scope.$last) {
                scope.initCarousel(element.parent());
            }
        }
    };
}]);

// Controller
app.controller("homeController", function ($scope) {
    $scope.items1 = [
        {url: '/Content/img/slider/slide-1.jpg', alt: 'текст'},
        {url: '/Content/img/slider/slide-2.jpg', alt: 'текст'},
        {url: '/Content/img/slider/slide-3.jpg', alt: 'текст'},
        {url: '/Content/img/slider/slide-4.jpg', alt: 'текст'},
        {url: '/Content/img/slider/slide-5.jpg', alt: 'текст'}
    ];
    $scope.property='{navigation: true, pagination: false, rewindNav : false}';
});

app.controller("flatController", function ($scope) {
});

app.controller("searchController", function ($scope) {
});

app.controller("searchResultController", function ($scope) {
});


// Route
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

        $routeProvider.when('/sale-realty/flats/search',
        {
            templateUrl:'views/sale-realty/search.html',
            controller:'searchController'
        });

        $routeProvider.when('/sale-realty/flats/search-result',
        {
            templateUrl:'views/sale-realty/search-result.html',
            controller:'searchResultController'
        });

        $routeProvider.otherwise({redirectTo: '/'});
});

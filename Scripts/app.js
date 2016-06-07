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
    // $scope.property='{navigation: true, pagination: false, rewindNav : false}';
});

app.controller("flatController", function ($scope) { });
app.controller("newbuildController", function ($scope) { });
app.controller("nedvizhimostController", function ($scope) { });
app.controller("searchController", function ($scope) { });
app.controller("officesController", function ($scope) { });
app.controller("searchResultController", function ($scope) { });
app.controller("searchDomaController", function ($scope) { });

// Company
app.controller("companyController", function ($scope) { });
app.controller("historyController", function ($scope) { });
app.controller("reviewController", function ($scope) {
    $scope.list = [
        {url: '/Content/img/review/slide-1.jpg'},
        {url: '/Content/img/review/slide-2.jpg'},
        {url: '/Content/img/review/slide-3.jpg'},
        {url: '/Content/img/review/slide-4.jpg'},
        {url: '/Content/img/review/slide-5.jpg'},
        {url: '/Content/img/review/slide-6.jpg'}
    ]
});

// News
app.controller("pressController", function ($scope) { });


// Jobs
app.controller("vacancyController", function ($scope) { });
app.controller("trainingCenterController", function ($scope) { });
app.controller("successController", function ($scope) {
    $scope.list = [
        {url: '/Content/img/success/slide-1.jpg', alt: '123'},
        {url: '/Content/img/success/slide-2.jpg', alt: '123'},
        {url: '/Content/img/success/slide-3.jpg', alt: '123'}
    ];
});


app.controller("ipotekaController", function ($scope) {
    $scope.reviews = [
        {url: 'http://www.incom.ru/upload/iblock/94d/openbank.png', text: 'Компания «Инком-Недвижимость» крупнейший партнер Банка Уралсиб по ипотечному кредитованию. Профессионализм и высокая квалификация специалистов компании подтверждается как сотрудниками Банка, так и отзывами клиентов на протяжении всего длительного периода сотрудничества. Успех «Инком-Недвижимость» обусловлен открытостью и доступностью, четким пониманием потребностей клиентов и партнеров. Мы рекомендуем «Инком-Недвижимость» и предлагаем особые условия ипотечного кредитования для клиентов компании — снижение ставки на 1% от стандартных тарифов по программам ипотечного кредитования Банка.', name: 'Директор центра ипотечного кредитования Металлинвестбанка, Станислав Кондакчян'},
        {url: 'http://www.incom.ru/upload/iblock/d8c/ipoteka_reb.png', text: 'Абсолют Банк много лет успешно сотрудничает с компанией ИНКОМ, которая является одним из ключевых игроков на рынке недвижимости Москвы и Московской области. За время совместной работы агентство подтвердило свою репутацию надежного партнера, который имеет обширную сеть офисов, работающих по единым профессиональным стандартам. Прочные деловые отношения приносят пользу не только банку и агентству, но и тем, кто решил взять квартиру в ипотеку — для клиентов ИНКОМа ставка по кредиту на 0,5 процентных пункта ниже, чем для остальных заемщиков.', name: 'Начальник отдела продаж ипотечных кредитов Банка «УРАЛСИБ», Максим Мельников'},
        {url: 'http://www.incom.ru/upload/iblock/9ac/metallinvest.png', text: ', совместно помогаем жителям Москвы и Московской области в решении жилищных вопросов. Считаю Компанию высококлассным экспертом в области любых операций с недвижимостью и стратегическим партнером банка. Специалисты ИНКОМа отличаются высоким профессионализмом и успешно реализуют мечты своих клиентов.', name: 'Руководитель центра Ипотечного кредитования Абсолют банка, Сергей Джамалутинов'}
    ];


    // $scope.oneAtATime = true;
    //
    // $scope.groups = [
    //     {
    //       title: 'Dynamic Group Header - 1',
    //       content: 'Dynamic Group Body - 1'
    //     },
    //     {
    //       title: 'Dynamic Group Header - 2',
    //       content: 'Dynamic Group Body - 2'
    //     }
    // ];
    //
    // $scope.items = ['Item 1', 'Item 2', 'Item 3'];
    //
    // $scope.addItem = function() {
    //     var newItemNo = $scope.items.length + 1;
    //     $scope.items.push('Item ' + newItemNo);
    // };
    //
    // $scope.status = {
    //     isCustomHeaderOpen: false,
    //     isFirstOpen: true,
    //     isFirstDisabled: false
    // };
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

        $routeProvider.when('/sale-realty/newbuild',
        {
            templateUrl:'views/sale-realty/newbuild.html',
            controller:'newbuildController'
        });

        $routeProvider.when('/offices',
        {
            templateUrl:'views/offices.html',
            controller:'officesController'
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

        $routeProvider.when('/prodazha-domov-kottedzhej/',
        {
            templateUrl:'views/sale-realty/prodazha-domov-kottedzhej.html',
            controller:'searchDomaController'
        });

        $routeProvider.when('/ipoteka/',
        {
            templateUrl:'views/ipoteka.html',
            controller:'ipotekaController'
        });

        // Jobs
        $routeProvider.when('/jobs/vacancy/',
        {
            templateUrl:'views/jobs/vacancy.html',
            controller:'vacancyController'
        });

        $routeProvider.when('/jobs/training-center/',
        {
            templateUrl:'views/jobs/training-center.html',
            controller:'trainingCenterController'
        });

        $routeProvider.when('/jobs/success/',
        {
            templateUrl:'views/jobs/success.html',
            controller:'successController'
        });

        // Company
        $routeProvider.when('/company/company/',
        {
            templateUrl:'views/company/company.html',
            controller:'companyController'
        });

        $routeProvider.when('/company/history/',
        {
            templateUrl:'views/company/history.html',
            controller:'historyController'
        });

        $routeProvider.when('/company/review/',
        {
            templateUrl:'views/company/review.html',
            controller:'reviewController'
        });

        // News
        $routeProvider.when('/news/press/',
        {
            templateUrl:'views/news/press.html',
            controller:'pressController'
        });


        $routeProvider.otherwise({redirectTo: '/'});
});

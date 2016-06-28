var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
                var defaultOptions = {};
                var customOptions = scope.$eval($(element).attr('data-options'));
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
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
});

app.controller("flatController", function ($scope) { });
app.controller("newbuildController", function ($scope) { });
app.controller("searchController", function ($scope) { });
app.controller("officesController", function ($scope) {
    $scope.offices = [
        {adress: 'ул. Купалы 21', place: '(Дворец Ветеранов)', metro: 'Октябрьская', workStart: '09:00', workEnd: '19:00', phone: '+375-(29)-680-66-70' },
        {adress: 'ул. Кульман 9', place: '(ТЦ Монетка)', metro: 'Площадь Якуба Коласа', workStart: '09:00', workEnd: '19:00', phone: '+375-(29)-680-44-75' },
        {adress: 'ул. Короля 9', place: '', metro: 'Немига', workStart: '09:00', workEnd: '19:00', phone: '+375-(29)-321-36-20' },
        {adress: 'ул. Притыцкого 29', place: '(ТЦ Тивали)', metro: 'Спортивная', workStart: '09:00', workEnd: '19:00', phone: '+375-(29)-727-04-32' }
    ];

    $scope.isOpenMode = 'list';
});
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

//Nedvizhimost
app.controller("arendaKottedzheyController", function ($scope) { });
app.controller("nedvizhimostController", function ($scope) { });
app.controller("prodazhaNezhilyhPomeshcheniyController", function ($scope) { });

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

// Realty
app.controller("realtyController", function ($scope) { });

// Uslugi
app.controller("pokupkaKvartirController", function ($scope) { });
app.controller("pokupkaKvartirNewController", function ($scope) { });
app.controller("pokupkaNedvizimostiController", function ($scope) { });
app.controller("loyalnostController", function ($scope) { });

// Ipoteka
app.controller("ipotekaController", function ($scope) {
    $scope.reviews = [
        {url: 'http://www.incom.ru/upload/iblock/94d/openbank.png', text: 'Компания «ЗемНедвижимость» крупнейший партнер Банка Уралсиб по ипотечному кредитованию. Профессионализм и высокая квалификация специалистов компании подтверждается как сотрудниками Банка, так и отзывами клиентов на протяжении всего длительного периода сотрудничества. Успех «ЗемНедвижимость» обусловлен открытостью и доступностью, четким пониманием потребностей клиентов и партнеров. Мы рекомендуем «ЗемНедвижимость» и предлагаем особые условия ипотечного кредитования для клиентов компании — снижение ставки на 1% от стандартных тарифов по программам ипотечного кредитования Банка.', name: 'Директор центра ипотечного кредитования Металлинвестбанка, Станислав Кондакчян'},
        {url: 'http://www.incom.ru/upload/iblock/d8c/ipoteka_reb.png', text: 'Абсолют Банк много лет успешно сотрудничает с компанией ЗемНедвижимость, которая является одним из ключевых игроков на рынке недвижимости Минска и Минской области. За время совместной работы агентство подтвердило свою репутацию надежного партнера, который имеет обширную сеть офисов, работающих по единым профессиональным стандартам. Прочные деловые отношения приносят пользу не только банку и агентству, но и тем, кто решил взять квартиру в ипотеку — для клиентов ЗемНедвижимостьа ставка по кредиту на 0,5 процентных пункта ниже, чем для остальных заемщиков.', name: 'Начальник отдела продаж ипотечных кредитов Банка «УРАЛСИБ», Максим Мельников'},
        {url: 'http://www.incom.ru/upload/iblock/9ac/metallinvest.png', text: ', совместно помогаем жителям Минска и Минской области в решении жилищных вопросов. Считаю Компанию высококлассным экспертом в области любых операций с недвижимостью и стратегическим партнером банка. Специалисты ЗемНедвижимостьа отличаются высоким профессионализмом и успешно реализуют мечты своих клиентов.', name: 'Руководитель центра Ипотечного кредитования Абсолют банка, Сергей Джамалутинов'}
    ];
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

        // Nedvizhimost
        $routeProvider.when('/arenda-kottedzhey/',
        {
            templateUrl:'views/sale-realty/arenda-kottedzhey.html',
            controller:'arendaKottedzheyController'
        });

        $routeProvider.when('/prodaja-nezhilyh-pomeshcheniy/',
        {
            templateUrl:'views/sale-realty/prodaja-nezhilyh-pomeshcheniy.html',
            controller:'prodazhaNezhilyhPomeshcheniyController'
        });

        // Realty
        $routeProvider.when('/rent-realty/flats/',
        {
            templateUrl:'views/rent-realty/flats.html',
            controller:'realtyController'
        });

        // Uslugi
        $routeProvider.when('/uslugi/pokupka-kvartir-i-komnat/',
        {
            templateUrl:'views/uslugi/pokupka-kvartir-i-komnat.html',
            controller:'pokupkaKvartirController'
        });
        $routeProvider.when('/uslugi/pokupka-kvartir-v-novostroykakh/',
        {
            templateUrl:'views/uslugi/pokupka-kvartir-v-novostroykakh.html',
            controller:'pokupkaKvartirNewController'
        });
        $routeProvider.when('/uslugi/pokupka-zagorodnoy-nedvizhimosti/',
        {
            templateUrl:'views/uslugi/pokupka-zagorodnoy-nedvizhimosti.html',
            controller:'pokupkaNedvizimostiController'
        });
        $routeProvider.when('/uslugi/programma-loyalnosti/',
        {
            templateUrl:'views/uslugi/programma-loyalnosti.html',
            controller:'loyalnostController'
        });

        // News
        $routeProvider.when('/news/press/',
        {
            templateUrl:'views/news/press.html',
            controller:'pressController'
        });


        $routeProvider.otherwise({redirectTo: '/'});
});

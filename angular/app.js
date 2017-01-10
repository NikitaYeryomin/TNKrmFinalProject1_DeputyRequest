var app = angular.module('App', [
    'ui.router',
    'ngPageTitle'
    //'ui.bootstrap',
    //'ngResource',
    //'angularFileUpload',
    //'angucomplete-alt'
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/angular/templates/home.html',
                controller: 'AppController',
                data:{
                    title: 'Система online-звернень до депутатів місцевих рад'
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: '/angular/templates/login_form.html',
                controller: 'AuthController',
                data:{
                    title: 'Вхід у систему'
                }
            })
            .state('register', {
                url: '/register',
                templateUrl: '/angular/templates/register_form.html',
                controller: 'UserController',
                data:{
                    title: 'Реєстрація'
                }
            })
            .state('districts', {
                url: '/districts',
                templateUrl: '/angular/templates/districts_index.html',
                controller: 'DistrictsController',
                data:{
                   title: 'Виборчі дільниці'
                }
            })
            .state('district', {
                url: '/district/:districtId',
                templateUrl: '/angular/templates/district_index.html',
                controller: 'DistrictsController',
                data:{
                    title: "Виборча дільниця № {{getDistrictId}}"
                },
                resolve: {
                    getDistrictId: ['$stateParams', function($stateParams) {
                        return $stateParams.districtId;
                    }]
                }
            })
            .state('city', {
                url: '/city',
                templateUrl: '/manage/templates/city/index.html',
                controller: 'CityController',
                data:{
                    title:'Список міст'
                }
            })
            .state('tvo', {
                url: '/tvo/:tvoId',
                templateUrl: '/angular/templates/districts_index.html',
                controller: 'DistrictsController',
                data:{
                    title: 'Територіальний виборчий округ'
                }
            });

        /*$locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });*/
    }]);
    
    /*var getDistrictId = ["$route", function($route)
    {    
        return $route.current.params.districtId;
    }];*/

var app = angular.module('App', [
    'ui.router',
    'ngPageTitle',
    'google.places',
    'ui.bootstrap',
    //'ngResource',
    //'angularFileUpload'
    //'angucomplete-alt'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$qProvider',
    function($stateProvider, $urlRouterProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
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
            .state('request', {
                url: '/request',
                templateUrl: '/angular/templates/request.html',
                controller: 'RequestController',
            })
            .state('request.material', {
                url: '/material',
                templateUrl: '/angular/templates/request_material.html',
                controller: 'RequestController',
                data:{
                    title: 'Звернення до депутата місцевої ради по матеріальну допомогу'
                }
            })
            .state('request.living', {
                url: '/moral',
                templateUrl: '/angular/templates/request_living.html',
                controller: 'RequestController',
                data:{
                    title: 'Звернення до депутата місцевої ради по моральну допомогу'
                }
            })
            .state('request.family', {
                url: '/moral',
                templateUrl: '/angular/templates/request_living.html',
                controller: 'RequestController',
                data:{
                    title: 'Звернення до депутата місцевої ради по моральну допомогу'
                }
            })
            .state('request.custom', {
                url: '/custom',
                templateUrl: '/angular/templates/request_custom.html',
                data:{
                    title: 'Звернення до депутата місцевої ради'
                }
            })
            .state('view', {
                url: '/view/:id',
                templateUrl: '/angular/templates/view.html',
                controller: 'ViewController',
                data:{
                    title: 'Звернення'
                },
                resolve: {id: ['$stateParams', function($stateParams) {return $stateParams.id;}]}
            })
            .state('user', {
                url: '/user',
                templateUrl: '/angular/templates/user.html',
                controller: 'UserController',
                data:{
                    title: 'Кабінет користувача'
                }
            })
            .state('office', {
                url: '/office',
                templateUrl: '/angular/templates/office.html',
                controller: 'OfficeController',
                data:{
                    title: 'Кабінет депутата'
                }
            })
            .state('districts', {
                url: '/districts',
                templateUrl: '/angular/templates/districts_index.html',
                controller: 'DistrictsController',
                data:{title: 'Виборчі дільниці'}
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
                url: '/tvo/:id',
                templateUrl: '/angular/templates/tvo.html',
                controller: 'TvoController',
                data:{title: 'Територіальний виборчий округ № {{id}}'},
                resolve: {id: ['$stateParams', function($stateParams) {return $stateParams.id;}]}
            })
            .state('deputies', {
                url: '/deputies',
                templateUrl: '/angular/templates/deputies.html',
                controller: 'DeputyController',
                data:{title: 'список депутатів'}
            })
            .state('deputy', {
                url: '/deputy/:id',
                templateUrl: '/angular/templates/deputy.html',
                controller: 'DeputyController',
                data:{title: "депутат № {{id}}"},
                resolve: {id: ['$stateParams', function($stateParams) {return $stateParams.id;}]
                }
            })
            .state('requests', {
                url: '/requests/:type',
                templateUrl: '/angular/templates/list.html',
                controller: 'RequestsController',
                data:{title: "Звернення"},
                resolve: {id: ['$stateParams', function($stateParams) {return $stateParams.type;}]
                }
            })
            .state('error', {
                url: '/error',
                templateUrl: '/angular/templates/error.html',
                controller: 'ErrorController',
                data:{title: 'Помилка!'}
            })
            ;
        /*$locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });*/
    }]);

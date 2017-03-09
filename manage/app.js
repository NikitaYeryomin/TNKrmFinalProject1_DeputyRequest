/*******************************************************************
****************************** АДминка *****************************
************************************************************/

var app = angular.module('App', [
    'ui.router',
    'ui.router.title',
    'angularFileUpload',
    'ui.bootstrap'
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '/manage/templates/manage.html',
            controller: 'ManageController',
            resolve: {$title: function() { return 'Адміністрування системи'}}
        })
        .state('users', {
            url: '/users',
            templateUrl: '/manage/templates/user/index.html',
            controller: 'UsersController',
            resolve: {$title: function() { return 'Список користувачів'}}
        })
        .state('user', {
            url: '/user/:userId',
            templateUrl: '/manage/templates/user/edit.html',
            controller: 'UserController',
            resolve: {
                $title: ['$stateParams', function($stateParams) {
                    return "Редагування користувача " + $stateParams.userId;
                }]
            }
        })
        .state('deputies', {
            url: '/deputies',
            templateUrl: '/manage/templates/deputies.html',
            controller: 'DeputyController',
            resolve: {$title: function() {return 'список депутатів'}}
        })
        .state('deputy/create', {
            url: '/deputy/create',
            templateUrl: '/manage/templates/deputy.html',
            controller: 'DeputyController',
            resolve: {$title: function() {return 'народити депутата'}}
        })   
        .state('deputy', {
            url: '/deputy/:id',
            templateUrl: '/manage/templates/deputy.html',
            controller: 'DeputyController',
            resolve: {
                $title:['$stateParams',function($stateParams){return"редагування депутата № "+$stateParams.id;
                }]
            }
        })
        .state('cities', {
            url: '/cities',
            templateUrl: '/manage/templates/city/index.html',
            controller: 'CitiesController',
            resolve: {$title: function() { return 'Список міст'}}
        })
        .state('city', {
            url: '/city/:cityId',
            templateUrl: '/manage/templates/city/view.html',
            controller: 'CityController',
            resolve: {
                $title: ['$stateParams', function($stateParams) {
                    return "Редагування міста " + $stateParams.cityId;
                }]
            }
        })
        .state('places', {
            url: '/places',
            templateUrl: '/manage/templates/places.html',
            controller: 'PlaceController',
            resolve: {$title: function() {return 'список адрес дільниць'}}
        })   
        .state('place/add', {
            url: '/place/add',
            templateUrl: '/manage/templates/add_a_place.html',
            controller: 'PlaceController',
            resolve: {$title: function() {return 'додати місце для голосування'}}
        })
        .state('place/edit', {
            url: '/place/:id',
            templateUrl: '/manage/templates/edit_a_place.html',
            controller: 'PlaceController',
            resolve: {$title: function() {return 'редагувати місце для голосування'}}
        })  
        .state('districts', {
            url: '/districts',
            templateUrl: '/manage/templates/districts.html',
            controller: 'DistrictController',
            resolve: {$title: function() {return 'список дільниць'}}
        })              
        .state('district/add', {
            url: '/district/add',
            templateUrl: '/manage/templates/addistrict.html',
            controller: 'DistrictController',
            resolve: {$title: function() {return "створення дільниці"}}
        }) 
        .state('district/edit', {
            url: '/district/:id',
            templateUrl: '/manage/templates/edistrict.html',
            controller: 'DistrictController',
            resolve: {
                $title:['$stateParams',function($stateParams){return"редагування дільниці № "+$stateParams.id;}]
            }
        }) 
        .state('tvo', {
            url: '/tvo',
            templateUrl: '/manage/templates/tvo.html',
            controller: 'TvoController',
            resolve: {$title: function() {return 'список ТВО'}}
        })  
        .state('tvo/edit', {
            url: '/tvo/:id',
            templateUrl: '/manage/templates/editvo.html',
            controller: 'TvoController',
            resolve: {
                $title:['$stateParams',function($stateParams){return"редагування ТВО № "+$stateParams.id;}]
            }
        })  
        .state('requests', {
            url: '/requests',
            templateUrl: '/manage/templates/request/index.html',
            controller: 'RequestsController',
            resolve: {
                $title: function() { return 'Список запитів'}
            }
        })
        .state('request', {
            url: '/request/:requestId',
            templateUrl: '/manage/templates/request/edit.html',
            controller: 'RequestController',
            resolve: {
                $title: ['$stateParams', function($stateParams) {
                    return "Редагування запита № " + $stateParams.requestId;
                }]
            }
        })
            /*
            .state('user/delete', {
                url: '/backend/manage/users/delete',
                templateUrl: '/angular/templates/userdelete.html', //какой адрес?
                controller: 'UsersController'
            });
            */
        /*$locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });*/
         ;
    }]);
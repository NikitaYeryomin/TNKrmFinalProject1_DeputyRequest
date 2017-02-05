/*******************************************************************
****************************** АДминка *****************************
************************************************************/

var app = angular.module('App', [
    'ui.router',
    'ui.router.title'
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/manage/templates/manage.html',
                controller: 'ManageController',
                resolve: {
                    $title: function() { return 'Адміністрування системи'}
                }
            })
            .state('users', {
                url: '/users',
                templateUrl: '/manage/templates/user/index.html',
                controller: 'UsersController',
                resolve: {
                    $title: function() { return 'Список користувачів'}
                }
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
                resolve: {$title: function() {return 'Список депутатів'}}
            })
            .state('deputy', {
                url: '/deputy/:id',
                templateUrl: '/manage/templates/deputy.html',
                controller: 'DeputyController',
                resolve: {
                    $title: ['$stateParams', function($stateParams) {
                        return "редагування депутата № " + $stateParams.id;
                    }]
                }
            })
            .state('cities', {
                url: '/cities',
                templateUrl: '/manage/templates/city/index.html',
                controller: 'CitiesController',
                resolve: {
                    $title: function() { return 'Список міст'}
                }
            })
            .state('city', {
                url: '/city/:cityId',
                templateUrl: '/manage/templates/city/view.html',
                controller: 'CityController',
                resolve: {
                    $title: ['$stateParams', function($stateParams) {
                        return "Місто " + $stateParams.userId;
                    }]
                }
            });
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
    }]);


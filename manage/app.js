var app = angular.module('App', [
    'ui.router'
    //'ui.bootstrap',
    //'ngResource',
    //'angularFileUpload',
    //'angucomplete-alt'
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/manage/templates/manage.html',
                controller: 'ManageController',
                data:{
                    title: 'Адміністрування системи'
                }
            })
            .state('users', {
                url: '/users',
                templateUrl: '/manage/templates/user/index.html',
                controller: 'UsersController',
                data:{
                    title: 'Список користувачів'
                }
            })
            .state('users.edit', {
                url: '/edit/:userId',
                templateUrl: '/manage/templates/user/edit.html',
                controller: 'UsersController',
                data:{
                    title: 'Редагування користувача'
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


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
            .state('user', {
                url: '/user',
                templateUrl: '/manage/templates/user/index.html',
                controller: 'UserController',
                data:{
                    title: 'Список користувачів'
                }
            })
            .state('useredit', {
                url: '/user/:userId',
                templateUrl: '/manage/templates/user/edit.html',
                controller: 'UserController',
                data:{
                    title: 'Редагування користувача {{userId}}'
                }
                /*
                ,
                resolve: {
                    getUserId: ['$stateParams', function($stateParams) {
                        return $stateParams.userid;
                    }]
                }
                */
            })
            .state('city',{
                url: '/city',
                templateUrl: '/manage/templates/city/index.html',
                controller: 'CityController',
                data:{
                    title:'Список міст'
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


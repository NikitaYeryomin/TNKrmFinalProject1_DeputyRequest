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
            .state('home', {
                url: '/',
                templateUrl: '/angular/templates/home.html',
                controller: 'AppController'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/angular/templates/login_form.html',
                controller: 'AuthController'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/angular/templates/register_form.html',
                controller: 'UsersController'
            })
            .state('districts', {
                url: '/districts:districtId',
                templateUrl: '/angular/templates/districts_index.html',
                controller: 'DistrictsController'
            })
            .state('manage', {
                url: '/manage',
                templateUrl: '/angular/templates/manage.html',
                controller: 'ManageController'
            })
            .state('manage.users', {
                url: '/manage/users',
                templateUrl: '/angular/templates/users_index.html',
                controller: 'UsersController'
            })
            .state('manage.users.edit', {
                url: '/manage/users/edit',
                templateUrl: '/angular/templates/user.html',
                controller: 'UsersController'
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

app.factory('Page', function(){
    var title = 'default';
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
});

app.filter('startFrom', function() {
    return function(data, start) {
        if (data) {
            start = +start;
            return data.slice(start);
        }
        return [];
    };
});

app.filter('formatDateTimeUnix', ['$filter', function ($filter) {
    return function (date, format) {
        if (date) {
            return moment.unix(date).format(format || "DD/MM/YYYY h:mm A");
        }
        else
            return "";
    };
}]);

app.filter('formatDateTime', ['$filter', function ($filter) {
    return function (date, format) {
        if (date) {
            return moment(date).format(format || "DD/MM/YYYY h:mm A");
        }
        else
            return "";
    };
}]);

app.filter('numberWithCommasFormat', [function () {
    return function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}]);

app.filter('humanizeNumber', function() {
    return function (x) {
        if (x >= 1000) {
            return Math.floor((x / 1000)*10) / 10 + 'K';
        } else {
            return x;
        }
    }
});

app.filter('timeFromNow', function() {
    return function(x) {
        return moment.unix(x).fromNow();
    }
});


app.filter('locationFromAddress', function() {
    return function(obj) {
        if (obj == undefined) {
            return '-';
        }
        if (obj.city != undefined || obj.country != undefined) {
            return [obj.city, convertCountryCode(obj.country)].clean().join(", ");
        } else {
            return '-';
        }

    }
});

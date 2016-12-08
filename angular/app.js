var app = angular.module('App', [
    'ui.router'
    //'ui.bootstrap',
    //'ngResource',
    //'angularFileUpload',
    //'angucomplete-alt'
]);

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    function($stateProvider, $locationProvider, $urlRouterProvider) {

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
            .state('districts', {
                url: '/districts',
                templateUrl: '/angular/templates/districts_index.html',
                controller: 'DistrictsController'
            });

        /*$locationProvider.html5Mode({
         enabled: true,
         requireBase: false
         });*/
    }]);

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

app.filter('eventName', function() {
    return function(video) {
        if (video == undefined) {
            return '-';
        }
        if (video.event_name != '' && video.event_name != undefined) {
            return video.event_name;
        } else if (video.location.place_name != '' && video.location.place_name != undefined) {
            return video.location.place_name;
        } else {
            return [video.location.city, convertCountryCode(video.location.country)].clean().join(", ");
        }
    }
});

app.filter('eventEventName', function() {
    return function(event) {
        if (event == undefined) {
            return '-';
        }
        if (event.event_name != '' && event.event_name != undefined) {
            return event.event_name;
        } else if (event.items[0] && event.items[0].place_name != '' && event.items[0].place_name != undefined) {
            return video.location.place_name;
        } else if (event.items[0] && (event.items[0].city != undefined || event.items[0].country != undefined) ) {
            return [event.items[0].city, convertCountryCode(event.items[0].country)].clean().join(", ");
        } else {
            return 'Untitled';
        }
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

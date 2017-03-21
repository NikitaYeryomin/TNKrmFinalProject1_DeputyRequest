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
            return moment(date).format('DD/MM/YYYY h:mm' );
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
    
    function show_message(message, returnUrl) {
        $rootScope.message = message;
        $rootScope.returnUrl = returnUrl;
        $location.path('/error');
    }
    
});

function humantime (timestamp) {
    var months=['січня','лютого',"березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
    var time=(timestamp.slice(8,10)<10?timestamp.slice(9,10):timestamp.slice(8,10))+' '+months[timestamp.slice(5,7)-1]+' '+timestamp.slice(0,4)+' о'+(timestamp.slice(11,13)==11?'б':'')+' '+timestamp.slice(11,16);
    return time;
}
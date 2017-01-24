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

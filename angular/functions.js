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

app.filter('humantime', ['$filter', function ($filter) {
    return function (timestamp) {
        if (timestamp) {
    var months=['січня','лютого',"березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
    var time=(timestamp.slice(8,10)<10?timestamp.slice(9,10):timestamp.slice(8,10))+' '+months[timestamp.slice(5,7)-1]+' '+timestamp.slice(0,4)+' о'+(timestamp.slice(11,13)==11?'б':'')+' '+timestamp.slice(11,16);
    return time;
          }
        else
            return "";
    };
}]);

app.filter('humandate', ['$filter', function ($filter) {
    return function (datestamp) {
        if (datestamp) {
    var months=['січня','лютого',"березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
    var time=(datestamp.slice(8,10)<10?datestamp.slice(9,10):datestamp.slice(8,10))+' '+months[datestamp.slice(5,7)-1]+' '+datestamp.slice(0,4);
    return time;
          }
        else
            return "";
    };
}]);

app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) {
            text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span class="highlighted">$1</span>');
        }
        return $sce.trustAsHtml(text);
    };
});

/*app.filter('formatDate', ['$filter', function ($filter) {
    return function (date, format) {
        if (date) {
            return moment(date).format('DD.MM.YYYY' );
          }
        else
            return "";
    };
}]);*/

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

function mw(){
    var modal = document.getElementById('modalWindow');
    var img = document.getElementById('windowed');
    var modalImg = document.getElementById("modalimage");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {modal.style.display = "none";}
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {isEscape = (evt.key == "Escape" || evt.key == "Esc");} 
        else {isEscape = (evt.keyCode == 27);}
        if (isEscape) {modal.style.display = "none";}
    };
}
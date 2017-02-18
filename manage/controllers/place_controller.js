app.controller('PlaceController', ['$scope', '$http', '$location', '$state', '$stateParams',
   function($scope, $http, $location , $state, $stateParams){$scope.id = $stateParams.id;  
            $scope.place = {};
        $scope.saveplace = function() {
            $http({
                method: 'POST',
                url: '/backend/place/save/'+ $scope.id,
                data: $.param({
                    'address': $scope.place.address,
                    'latitude': $scope.place.latitude,
                    'longitude': $scope.place.longitude
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/places');
                }
            });
        };      
   }])
   
.directive('addPlace', ['$http', function($http) {    
    var map;
    var link = function($scope, element, attrs) {
        function initMap() {
            var mapOptions = {
                zoom: 12,
                center: {lat: 48.731625, lng: 37.579165},
                 mapTypeId: google.maps.MapTypeId.HYBRID,
                streetViewControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                }
            };
            if (map === void 0) {map = new google.maps.Map(element[0], mapOptions);}
        }//map
    initMap();    
    var oneMarker=false;
	map.addListener('click', function(event) {
	    if (oneMarker==false){addMarker(event.latLng.lat(),event.latLng.lng());oneMarker=true;}
	});  
    var f1=document.getElementById('marker_latitude');
    var f2=document.getElementById('marker_longitude');
    function addMarker(lat, lon) {
        var marker = new google.maps.Marker
        ({position:new google.maps.LatLng(lat,lon),map:map,draggable:true});
        f2.value=lon; f1.value=lat;
        marker.addListener('dragend', function() {
            f2.value=marker.getPosition().lng(); f1.value=marker.getPosition().lat();
        });
    }
        };
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}]) 
        
/******************************************список *************************************************/
.directive('placesList', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/place/index',
        }).then(function(response) {
            console.log(response.data);
            $scope.places = response.data.places;
        });
    };
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}])
/****************************редактирование****************************************/
.directive('editPlace', ['$http', function($http) {    
    var map;
    var link = function($scope, element, attrs) {
        function initMap() {
            var mapOptions = {
                zoom: 16,
                center: {lat: $scope.place.latitude, lng: $scope.place.longitude},
                 mapTypeId: google.maps.MapTypeId.HYBRID,
                streetViewControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                }
            };
            if (map === void 0) {map = new google.maps.Map(element[0], mapOptions);}
            var f1=document.getElementById('marker_latitude');
            var f2=document.getElementById('marker_longitude');    
            var marker = new google.maps.Marker
        ({position:new google.maps.LatLng($scope.place.latitude,$scope.place.longitude),map:map,draggable:true});
    marker.addListener('dragend', function() {  f2.value=marker.getPosition().lng(); f1.value=marker.getPosition().lat();  });
marker.setMap(map);    
        }//map
    
        $http({
            method: 'GET',
            url: '/backend/place/viewandedit/' + $scope.id,
        }).then(function(response) {
            console.log(response.data);
            $scope.place = response.data.place;
            initMap(); 
        });
        };
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}]) 
   
;
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
/****************************добавление****************************************/  
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
            map = new google.maps.Map(element[0], mapOptions);
        }//map
    initMap();    
    var oneMarker=false;
	map.addListener('click', function(event) {
	    if (oneMarker==false){addMarker(event.latLng.lat(),event.latLng.lng());oneMarker=true;}
	});  
    function addMarker(lat, lon) {
        var marker = new google.maps.Marker
            ({position:new google.maps.LatLng(lat,lon),map:map,draggable:true});
            $scope.place.latitude=lat;
            $scope.place.longitude=lon; 
            marker.addListener('dragend', function() {
                $scope.place.latitude=marker.getPosition().lat(); 
                $scope.place.longitude=marker.getPosition().lng();
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
        map = new google.maps.Map(element[0], mapOptions);
            var marker = new google.maps.Marker({
                position:new google.maps.LatLng($scope.place.latitude,$scope.place.longitude),
                map:map,
                draggable:true
            });
            marker.addListener('dragend', function() {
                $scope.place.latitude=marker.getPosition().lat(); 
                $scope.place.longitude=marker.getPosition().lng();   
            });
        marker.setMap(map);    
        }//map
    
        $http({
            method: 'GET',
            url: '/backend/place/viewandedit/' + $scope.id,
        }).then(function(response) {
            console.log(response.data);
            $scope.place = response.data.place;
            $scope.disabled=response.data.disabled;
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
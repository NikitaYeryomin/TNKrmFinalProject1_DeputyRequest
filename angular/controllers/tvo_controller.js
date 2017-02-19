app.controller('TvoController', ['$scope', '$http', '$location', '$state', '$stateParams',
    function($scope, $http, $location, $state, $stateParams) {$scope.id = $stateParams.id;}])
/*************************************ТВО****************************************************/
.directive('oneTvo', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element) {
        function initMap() {
            var latitude = ($scope.extremes.maxlat+$scope.extremes.minlat)/2;
            var longtitude = ($scope.extremes.maxlon+$scope.extremes.minlon)/2;
            var mapOptions = {
                zoom: 14,
                center: {lat: latitude, lng: longtitude},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                }
            };
            map = new google.maps.Map(element[0], mapOptions);
        }
        function addDistrict(id, coords, сolor) {
            var district = new google.maps.Polygon({
                paths: coords,
                strokeColor: сolor,
                strokeOpacity: 0.9,
                strokeWeight: 2,
                fillColor: сolor,
                fillOpacity: 0.4
            });
            district.setMap(map);
            district.addListener('click', function (pos) {
                var infowindow = new google.maps.InfoWindow({
                    content: ('дільниця<br>№ <a href="#!/district/' + id + '">' + id + '</a>'),
                    position: pos.latLng
                });
                infowindow.open(map);
            });
        }
        function addMarker(lat, lon){
            var image={
                url:'/img/flag.gif',
                size: new google.maps.Size(19,20),
                origin:new google.maps.Point(0,0),
                anchor:new google.maps.Point(1,20)
            };
            var marker = new google.maps.Marker
                ({
                position:new google.maps.LatLng(lat, lon),
                map:map,
                icon:image
            });
        marker.setMap(map);
        }//addMarker

       $http({
            method: 'GET',
             url: '/backend/tvo/id/' + $scope.id
        }).then(function(response) {
            console.log(response.data);
            $scope.districts = response.data.districts;
            $scope.extremes = response.data.extremes;
            $scope.deputies = response.data.deputies;
            if ($scope.deputies.length>1){$scope.postfix='и';}
            if ($scope.deputies.length==0){$scope.collision='Від округу депутата до міськради не делеговано.';}
            initMap();
            for (var i = 0; i < $scope.districts.length; i++) {
                addDistrict($scope.districts[i]['id'], $scope.districts[i]['vertex'], $scope.districts[i]['color']);
                addMarker($scope.districts[i]['latitude'], $scope.districts[i]['longitude'])
            }
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
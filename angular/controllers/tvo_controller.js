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
                zoom: $scope.z,
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
            //console.log(response.data);
            $scope.districts = response.data.districts;
            $scope.extremes = response.data.extremes;
            var diflat=$scope.extremes.maxlat-$scope.extremes.minlat;
            var diflon=$scope.extremes.maxlon-$scope.extremes.minlon;
            $scope.z=12;
            if (diflat<=0.05 && diflon<=0.135) {$scope.z=13;}
            if (diflat<=0.025 && diflon<=0.067) {$scope.z=14;}
            if (diflat<=0.012 && diflon<=0.033) {$scope.z=15;}
            if (diflat<=0.006 && diflon<=0.017) {$scope.z=16;}
            if (diflat<=0.003 && diflon<=0.008) {$scope.z=17;}
            if (diflat<=0.0025 && diflon<=0.005) {$scope.z=18;}
            //console.log($scope.z);console.log(diflat);
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
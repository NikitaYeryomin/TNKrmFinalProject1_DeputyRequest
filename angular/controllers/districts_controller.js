app.controller('DistrictsController', ['$scope', '$http', '$location', '$state', 'Page', '$stateParams',
    function($scope, $http, $location, $state, Page, $stateParams) {
        $scope.districtId = $stateParams.districtId;

        if ($state.current.data != undefined) {
            if ($state.current.name == 'district') {
                Page.setTitle($state.current.data.title + " " + $scope.districtId);
            }
            else {
                Page.setTitle($state.current.data.title);
            }
        }


  }])

.directive('fullMap', ['$http', function($http) {
    var map, infoWindow;
    // directive link function
    var link = function($scope, element, attrs) {

        // init the map
        function initMap() {
            // map config
            var latitude = (parseFloat($scope.scale.maxlat) + parseFloat($scope.scale.minlat)) / 2;
            var longtitude = (parseFloat($scope.scale.maxlon) + parseFloat($scope.scale.minlon)) / 2;

            var mapOptions = {
                zoom: 12,
                center: {lat: latitude, lng: longtitude},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                }
            };
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }

        function addDistrict(id, coords, сolor, tvoid) {
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
                    content: (
'дільниця № <a href="district/' + id + '">' + id + '</a>,<br><acronym title="територіальний виборчий округ">ТВО</acronym> № ' + tvoid
                        ),
                    position: pos.latLng
                });
                infowindow.open(map);
            });
        }

        $http({
            method: 'GET',
            url: '/backend/districts/full_map'
        }).then(function(response) {
            console.log(response.data);
            $scope.scale = response.data.scale;
            var districts = response.data.districts_on_map;
         //   $scope.districts = response.data.districts;
            initMap();

            for (var i = 0; i < districts.length; i++) {
                addDistrict(districts[i][0], districts[i][1], districts[i][2], districts[i][3]);
            }
//alert(districts);
        });

    };

    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}])

/********************************************************************************************/

.directive('districtsMap', ['$http', function($http) {
    var map, infoWindow;
    // directive link function
    var link = function($scope, element, attrs) {

        // init the map
        function initMap() {
            // map config
            var latitude = (parseFloat($scope.scale.maxlat) + parseFloat($scope.scale.minlat)) / 2;
            var longtitude = (parseFloat($scope.scale.maxlon) + parseFloat($scope.scale.minlon)) / 2;

            var mapOptions = {
                zoom: 12,
                center: {lat: latitude, lng: longtitude},
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                }
            };
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
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
                    content: ('дільниця<br>№ <a href="district/' + id + '">' + id + '</a>'),
                    position: pos.latLng
                });
                infowindow.open(map);
            });
        }

        function addMarker(lat, lon, text) {
            var content;
            text.length > 1 ? content = 'дільниці №№:<br>' : content = 'дільниця<br>№ ';
            for (var i = 0; i < text.length; i++) {
                content += '<a href="district/' + text[i] + '">' + text[i] + '</a><br>';
            }
            var image = {
                url: '/img/flag.gif',
                size: new google.maps.Size(19, 20),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(1, 20)
            };
            var marker = new google.maps.Marker
            ({
                position: new google.maps.LatLng(lat, lon),
                map: map,
                icon: image
            });
            marker.setMap(map);
            marker.addListener('click', function () {
                var infowindow = new google.maps.InfoWindow({
                    content: content,
                    position: marker.getPosition()
                });
                infowindow.open(map);
            });
        }

        $http({
            method: 'GET',
            url: '/backend/districts/index'
        }).then(function(response) {
            console.log(response.data);
            $scope.scale = response.data.scale;
            var districts = response.data.districts_on_map;
            var places = response.data.places_on_map;
            $scope.districts = response.data.districts;
            $scope.places = response.data.places;

            initMap();

            for (var i = 0; i < districts.length; i++) {
                addDistrict(districts[i][0], districts[i][1], districts[i][2]);
            }

            for (var i = 0; i < places.length; i++) {
                addMarker(places[i][0], places[i][1], places[i][2]);
            }

        });

    };

    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}]);


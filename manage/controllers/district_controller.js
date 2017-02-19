app.controller('DistrictController', ['$scope', '$http', '$location', '$state', '$stateParams',
    function($scope, $http, $location, $state, $stateParams) {
        $scope.id = $stateParams.id;
        $scope.savedistrict = function() {
            $http({
                method: 'POST',
                url: '/backend/districts/save/'+ $scope.id,
                data: $.param({
                    'addresses': $scope.district.addresses,
                    'vertex': $scope.district.rawvertex
                    //,'longitude': $scope.place.longitude
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/districts');
                }
            });
        };  
  }])

/******************************************список участков*************************************************/
.directive('districtsList', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/districts/index',
        }).then(function(response) {
            console.log(response.data);
            $scope.districts = response.data.districts;
            $scope.places = response.data.places;
        });
    };
    return {
        restrict: 'A',
        template: '<div id="districts-list"></div>',
        replace: true,
        link: link
    };
}])
/****************************редактирование****************************************/
.directive('editDistrict', ['$http', function($http) {    
    var map;
    var link = function($scope, element, attrs) {
        function initMap() {
            var clatitude = ($scope.extremes.maxlat+$scope.extremes.minlat)/2;
            var clongtitude = ($scope.extremes.maxlon+$scope.extremes.minlon)/2;
            var mapOptions = {
                zoom: 16,
                center: {lat: clatitude, lng: clongtitude},
                 mapTypeId: google.maps.MapTypeId.HYBRID,
                streetViewControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                }
            };
        map = new google.maps.Map(element[0], mapOptions);
        var polygon = new google.maps.Polygon({
            paths: $scope.district.vertex,
            strokeColor: '#F00',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#F00',
            fillOpacity: 0.25,
            editable: true
        });
        var infoWindow=document.getElementById("vertex");
        function showVertex() {
            var vertices = polygon.getPath();
            var contentString='';
            for (var i =0; i < vertices.getLength(); i++) {
                var xy = vertices.getAt(i);
                contentString += xy.lat().toFixed(4) + ',' +    xy.lng().toFixed(4)+';';
            }
            contentString=contentString.slice(0,contentString.length-1);
            $scope.district.rawvertex=contentString;
            infoWindow.value=contentString;
        }
        polygon.getPaths().forEach(function (path, index) {
            google.maps.event.addListener(path, 'insert_at', function () 	{showVertex();});
            google.maps.event.addListener(path, 'remove_at', function () 	{showVertex();});
            google.maps.event.addListener(path, 'set_at', function () {showVertex();});
        });
        polygon.addListener('dragend', showVertex);
        
        polygon.setMap(map);
        }//map
    
        $http({
            method: 'GET',
            url: '/backend/districts/edit/' + $scope.id,
        }).then(function(response) {
            console.log(response.data);
            $scope.places = response.data.places;
            $scope.district=response.data.district;
            $scope.extremes=response.data.extremes;
            $scope.tvo=response.data.tvo;
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
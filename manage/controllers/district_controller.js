app.controller('DistrictController', ['$scope', '$http', '$location', '$state', '$stateParams',
    function($scope, $http, $location, $state, $stateParams) {
        $scope.id = $stateParams.id;
        $scope.district = {};
        $scope.savedistrict = function() {
            $http({
                method: 'POST',
                url: '/backend/districts/save/'+ $scope.id,
                data: $.param({
                    'addresses': $scope.district.addresses,
                    'vertex': $scope.district.rawvertex
                    ,'tvoid': $scope.district.tvoid
                    ,'place': $scope.district.place_id
                    ,'id': $scope.district.id
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {if (response.data.error == 0) {$location.path('/districts');}});
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
        function showVertex() {
            var vertices = polygon.getPath();
            var contentString='';
            for (var i =0; i < vertices.getLength(); i++) {
                var xy = vertices.getAt(i);
                contentString += xy.lat().toFixed(5) + ',' +    xy.lng().toFixed(5)+';';
            }
            contentString=contentString.slice(0,contentString.length-1);
            $scope.district.rawvertex=contentString;
        }
        polygon.getPaths().forEach(function (path, index) {
            google.maps.event.addListener(path, 'insert_at', function () 	{showVertex();});
            google.maps.event.addListener(path, 'remove_at', function () 	{showVertex();});
            google.maps.event.addListener(path, 'set_at', function () {showVertex();});
        });
        polygon.addListener('dragend', showVertex);
        var deleteMenu = new DeleteMenu();
        google.maps.event.addListener(polygon, 'rightclick', function(e) {
	        if (e.vertex == undefined) {return;}
	        deleteMenu.open(map, polygon.getPath(), e.vertex);
        });        
        polygon.setMap(map);
        function addDistricts(coords){
            var otherDistrict = new google.maps.Polygon({
                paths: coords,
                strokeColor: '#111',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#111',
                fillOpacity: 0.35
            });
            otherDistrict.setMap(map);
        }//addDistricts
        for (var i= 0; i< $scope.districts.length; i++){
            if($scope.districts[i].id!=$scope.id){addDistricts($scope.districts[i].vertex);    }
            }    
    }//map
        function DeleteMenu() {
            this.div_ = document.createElement('div');
            this.div_.className = 'delete-menu';
            this.div_.innerHTML = '&times;';
            var menu = this;
            google.maps.event.addDomListener(this.div_, 'click', function() {    menu.removeVertex();  });
        }
        DeleteMenu.prototype = new google.maps.OverlayView();
        DeleteMenu.prototype.onAdd = function() {
            var deleteMenu = this;
            var map = this.getMap();
            this.getPanes().floatPane.appendChild(this.div_);
            this.divListener_ = google.maps.event.addDomListener(map.getDiv(), 'mousedown', function(e) {
                if (e.target != deleteMenu.div_) {      deleteMenu.close();    }
            }, true);
        };
        DeleteMenu.prototype.onRemove = function() {
            google.maps.event.removeListener(this.divListener_);
            this.div_.parentNode.removeChild(this.div_);
            this.set('position');
            this.set('path');
            this.set('vertex');
        };
        DeleteMenu.prototype.close = function() { this.setMap(null);};
        DeleteMenu.prototype.draw = function() {
            var position = this.get('position');
            var projection = this.getProjection();
            if (!position || !projection) {return;}
            var point = projection.fromLatLngToDivPixel(position);
            this.div_.style.top = point.y + 'px';
            this.div_.style.left = point.x + 'px';
        };
        DeleteMenu.prototype.open = function(map, path, vertex) {
            this.set('position', path.getAt(vertex));
            this.set('path', path);
            this.set('vertex', vertex);
            this.setMap(map);
            this.draw();
        };
        DeleteMenu.prototype.removeVertex = function() {
            var path = this.get('path');
            var vertex = this.get('vertex');
            if (!path || vertex == undefined) {         this.close();            return;  }
            path.removeAt(vertex);
            this.close();
        };

        $http({
            method: 'GET',
            url: '/backend/districts/edit/' + $scope.id,
        }).then(function(response) {
            console.log(response.data);
            $scope.places = response.data.places;
            $scope.district=response.data.district;
            $scope.districts=response.data.districts;
            $scope.extremes=response.data.extremes;
            $scope.tvo=response.data.tvo;
            initMap();
        });
        };//link
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}])

/****************************добавление****************************************/
.directive('addDistrict', ['$http', function($http) {
    var map;
    var link = function($scope, element, attrs) {
        function initMap() {
            var mapOptions = {
                zoom: 13,
                center: {lat: 48.732, lng: 37.564},
                mapTypeId: google.maps.MapTypeId.HYBRID,
                streetViewControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP],
                }
            };
        map = new google.maps.Map(element[0], mapOptions);
        var one=false;
	    map.addListener('click', function(event) {
	       if (one==false){addDistrict(event.latLng); one=true;}
	    });  
        var district;
        function addDistrict(coords){
            var Coords=[{lat:(coords.lat()+0.002),lng:(coords.lng())},
            {lat:(coords.lat()-0.002),lng:(coords.lng()+0.004)},
            {lat:(coords.lat()-0.002),lng:(coords.lng()-0.004)}];
            district = new google.maps.Polygon({
                paths: Coords,
                strokeColor: '#F00',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#F00',
                fillOpacity: 0.35,
                editable: true
            });
            function showVertex() {
                var vertices = district.getPath();
                var contentString='';
                for (var i =0; i < vertices.getLength(); i++) {
                    var xy = vertices.getAt(i);
                    contentString += xy.lat().toFixed(5) + ',' +    xy.lng().toFixed(5)+';';
                }
                contentString=contentString.slice(0,contentString.length-1);
                $scope.district.rawvertex=contentString;
//document.getElementById("vertex").value=contentString;
            }
            district.getPaths().forEach(function (path, index) {
                google.maps.event.addListener(path, 'insert_at', function () 	{showVertex();});
                google.maps.event.addListener(path, 'remove_at', function () 	{showVertex();});
                google.maps.event.addListener(path, 'set_at', function () {showVertex();});
            });
            district.addListener('dragend', showVertex);
            var deleteMenu = new DeleteMenu();
            google.maps.event.addListener(district, 'rightclick', function(e) {
	            if (e.vertex == undefined) {return;}
	            deleteMenu.open(map, district.getPath(), e.vertex);
            });        

            district.setMap(map);
        }    
        function addDistricts(coords){
            var otherDistrict = new google.maps.Polygon({
                paths: coords,
                strokeColor: '#111',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#111',
                fillOpacity: 0.35
            });
            otherDistrict.setMap(map);
        }//addDistricts
        for (var i= 0; i< $scope.districts.length; i++){
            if($scope.districts[i].id!=$scope.id){addDistricts($scope.districts[i].vertex);    }
            }    
        }//map
        function DeleteMenu() {
            this.div_ = document.createElement('div');
            this.div_.className = 'delete-menu';
            this.div_.innerHTML = '&times;';
            var menu = this;
            google.maps.event.addDomListener(this.div_, 'click', function() {    menu.removeVertex();  });
        }
        DeleteMenu.prototype = new google.maps.OverlayView();
        DeleteMenu.prototype.onAdd = function() {
            var deleteMenu = this;
            var map = this.getMap();
            this.getPanes().floatPane.appendChild(this.div_);
            this.divListener_ = google.maps.event.addDomListener(map.getDiv(), 'mousedown', function(e) {
                if (e.target != deleteMenu.div_) {      deleteMenu.close();    }
            }, true);
        };
        DeleteMenu.prototype.onRemove = function() {
            google.maps.event.removeListener(this.divListener_);
            this.div_.parentNode.removeChild(this.div_);
            this.set('position');
            this.set('path');
            this.set('vertex');
        };
        DeleteMenu.prototype.close = function() { this.setMap(null);};
        DeleteMenu.prototype.draw = function() {
            var position = this.get('position');
            var projection = this.getProjection();
            if (!position || !projection) {return;}
            var point = projection.fromLatLngToDivPixel(position);
            this.div_.style.top = point.y + 'px';
            this.div_.style.left = point.x + 'px';
        };
        DeleteMenu.prototype.open = function(map, path, vertex) {
            this.set('position', path.getAt(vertex));
            this.set('path', path);
            this.set('vertex', vertex);
            this.setMap(map);
            this.draw();
        };
        DeleteMenu.prototype.removeVertex = function() {
            var path = this.get('path');
            var vertex = this.get('vertex');
            if (!path || vertex == undefined) {         this.close();            return;  }
            path.removeAt(vertex);
            this.close();
        };

        $http({
            method: 'GET',
            url: '/backend/districts/add/',
        }).then(function(response) {
            console.log(response.data);
            $scope.places = response.data.places;
            $scope.districts=response.data.districts;
            $scope.tvo=response.data.tvo;
            $scope.ids=response.data.ids;
            initMap();
        });
        };//link
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
        
}])

.directive('convertToNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(val) {
                return val != null ? parseInt(val, 10) : null;
            });
            ngModel.$formatters.push(function(val) {
                return val != null ? '' + val : null;
            });
        }
    };
});
   

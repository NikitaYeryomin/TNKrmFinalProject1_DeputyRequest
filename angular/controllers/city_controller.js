app.controller('CityController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {
        
        $scope.city = function() {
            $http({
                method: 'GET',
                url: '/backend/city'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.cities = response.data.CityList;
                    //$rootScope.cities = response.data.CityList;
                    //console.log($scope.cities);
                }
            });
        };
        
        /******************************************************************************/
        /*********************** определение границ города ****************************/
        /******************************************************************************/
        //Теперь не нужно - заменён геолокацией
        /*
        $scope.bounds = function() {
            if ($scope.user.city_id > 0) {
                console.log($scope.cities[$scope.user.city_id - 1].city);
                $http({
                    method: 'GET',
                    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + $scope.cities[$scope.user.city_id - 1].city
                }).then(function(response) {
                    if (response.data.status == "OK") {
                        console.log(response.data);
                        $rootScope.bounds = new google.maps.LatLngBounds(
                            new google.maps.LatLng(response.data.results[0].geometry.bounds.northeast)
                            //new google.maps.LatLng(response.data.results[0].geometry.bounds.southwest) 
                        );
                        console.log($rootScope.bounds);
                    }
                });
            }
        };
        */
        
        $scope.city();

    }]);
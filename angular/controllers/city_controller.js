app.controller('CityController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {
        
        $scope.city = function() {
            $http({
                method: 'GET',
                url: '/backend/city',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.cities = response.data.CityList;
                    console.log($scope.cities);
                }
            });
        };
        
        $scope.city();

    }]);
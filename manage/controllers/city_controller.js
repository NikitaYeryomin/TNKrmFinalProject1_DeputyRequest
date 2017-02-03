/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('CityController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {
        
        $scope.id = $stateParams.cityId;
        
        $scope.city = {};
        
        $scope.city = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/city/get/' + $scope.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.city = response.data.City;
                    console.log($scope.city);
                }
                $location.path('/city/' + $scope.id);
            });
        };
        
        $scope.city();

    }]);
/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('CitiesController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {
        
        $scope.cities = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/city'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.cities = response.data.CityList;
                    console.log($scope.cities);
                }
            });
        };
        
        $scope.cities();
        
    }]);
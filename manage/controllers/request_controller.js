/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.id = $stateParams.requestId;
        
        $scope.get_request = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/request/get/' + $scope.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.request = response.data.Request;
                    //$scope.cities = response.data.CityList;
                    // getting list of user's roles
                    /*
                    var roles = response.data.Roles[0]['Type'];
                    roles = roles.substring(roles.indexOf('(') + 1, roles.indexOf(')'));
                    roles = roles.replace(/'/g, "");
                    $scope.roles = roles.split(",");
                    */
                } else {
                    console.log('Error getting request info!');
                    return;
                }
                $location.path('/request/' + $scope.id);
            });            
        };
        
        $scope.get_request();
        
        $scope.save_request = function() {
            $http({
                method: 'POST',
                url: '/backend/manage/request/save/' + $scope.id,
                data: $.param({
                    //
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/requests');
                }
            });
        };
    }]);
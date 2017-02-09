/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('UsersController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {
        
        $scope.get_users = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/user'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.users = response.data.UserList;
                    $scope.cities = response.data.CityList;
                }
            });
        };
        
        $scope.get_users();
        
        $scope.deleteuser = function(userId) {
            $http({
                method: 'GET',
                url: '/backend/manage/user/delete/' + userId
            }).then(function(response) {
                if (response.data.error == 0) {
                    console.log(response.data.error);
                    $scope.get_users();
                }
            });
        };
    }]);
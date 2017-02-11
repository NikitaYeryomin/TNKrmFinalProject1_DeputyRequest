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

        $scope.confirm_delete = function(user) {
            $scope.current_user_id = user.userid;
            $scope.current_user_name = $scope.fullname(user);
            console.log("confirm delete: " + $scope.current_user_id);
        };
        
        $scope.delete_user = function(user_id) {
            console.log("delete user: " + user_id);
            $http({
                method: 'GET',
                url: '/backend/manage/user/delete/' + user_id
            }).then(function(response) {
                if (response.data.error == 0) {
                    console.log(response.data.error);
                    $scope.get_users();
                }
            });
        };
    }]);
app.controller('UserController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page',
    function($scope, $rootScope, $http, $location, $state, Page) {
        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }
        
        $scope.user = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/user',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.users = response.data.UserList;
                    $scope.cities = response.data.CityList;
                    console.log($scope.users);
                    console.log($scope.users);
                    //$location.path('/backend/manage/users');
                }
            });
        };
        
        $scope.user();
        
        $scope.deleteuser = function(userId) {
            $http({
                method: 'GET',
                url: '/backend/manage/user/delete/' + userId,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.user();
                }
            });
        };

    }]);
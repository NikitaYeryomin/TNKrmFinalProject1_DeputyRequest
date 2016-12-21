app.controller('UsersController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page',
    function($scope, $rootScope, $http, $location, $state, Page) {
        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }
        
        $scope.users = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/users',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.users = response.data.UserList;
                    console.log($scope.users);
                    //$location.path('/backend/manage/users');
                }
            });
        };
        
        $scope.users();


    }]);
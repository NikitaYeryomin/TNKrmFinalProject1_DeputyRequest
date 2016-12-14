app.controller('UsersController', ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {
        $scope.users = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/users',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                console.log(response.data);
                if (response.data.error == 0) {
                    $location.path('/backend/manage/users');
                }
            });
        };
    }]);

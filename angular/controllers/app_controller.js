app.controller('AppController', ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {
        $scope.logout = function() {
            $http({
                method: "POST",
                url: '/backend/users/logout',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function() {
                window.location.href = '/';
            });

        };

        function getCurrentUser() {
            $http({
                method: 'GET',
                url: '/backend/users/current'
            }).then(function(response) {
                console.log(response.data);
                if (response.data.error) {
                    console.log('Error getting user info!');
                    return;
                }
                $rootScope.currentUser = response.data.currentUser;
                if ($rootScope.currentUser) {
                    $rootScope.logged_in = true;
                }

            });
        }
        getCurrentUser();

    }]);
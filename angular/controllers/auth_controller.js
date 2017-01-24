app.controller('AuthController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {

        $scope.login = function() {
            console.log("login() called");
            $http({
                method: 'POST',
                url: '/backend/user/login',
                data: $.param({
                    'email': $scope.email,
                    'password': $scope.password
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                console.log("server called finished");
                console.log(response.data);
                if (response.data.error == 0) {
                    $rootScope.logged_in = true;
                    $rootScope.currentUser = response.data.currentUser;
                    console.log('returnUrl: ' + $rootScope.returnUrl);
                    var path= '/user';
                    if ($rootScope.returnUrl) {
                        path = $rootScope.returnUrl;
                        $rootScope.returnUrl = null;
                    } 
                    $location.path(path);
                }
            });
        };
    }]);

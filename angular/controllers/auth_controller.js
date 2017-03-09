app.controller('AuthController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {

        $scope.login = function() {
            $http({
                method: 'POST',
                url: '/backend/user/login',
                data: $.param({
                    'email': $scope.email,
                    'password': $scope.password
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $rootScope.logged_in = true;
                    $rootScope.currentUser = response.data.currentUser;
                    var path;
                    if ($rootScope.currentUser.role == 'deputy') {
                        path = '/office';    
                    } else {
                        path = '/user';
                    }
                    if ($rootScope.returnUrl) {
                        path = $rootScope.returnUrl;
                        $rootScope.returnUrl = null;
                    } 
                    $location.path(path);
                } else {
                    $rootScope.messages = response.data.messages;
                    $rootScope.returnUrl = 'login';
                    $location.path('/error');
                }
            });
        };
    }]);

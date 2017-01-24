app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {

        $scope.getuser = function() {
            if (!$rootScope.logged_in) {
                $rootScope.returnUrl = '/request';
                console.log($rootScope.returnUrl);
                $state.go('login');
            } else {
                $http({
                    method: 'GET',
                    url: '/backend/user/get/' + $rootScope.currentUser.id,
                }).then(function(response) {
                    if (response.data.error == 0) {
                        $scope.user = response.data.User;
                        console.log($scope.user);
                    }
                });
            }
        };
        
        $scope.getuser();
        
        $scope.request = {};
        
        $scope.save = function() {
            
        };
        
    }]);
app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {

        $scope.getuser = function() {
            if (!$rootScope.logged_in) {
                $rootScope.returnUrl = '/request';
                //console.log($rootScope.returnUrl);
                $location.path('/login');
            } else {
                $http({
                    method: 'GET',
                    url: '/backend/user/get/' + $rootScope.currentUser.id
                }).then(function(response) {
                    if (response.data.error == 0) {
                        $scope.user = response.data.User;
                        //$scope.deputy = response.data.Deputy;
                        console.log($scope.user);
                        //console.log($scope.deputy);
                    }
                });
            }
        };
        
        $scope.getdeputy = function() {
            $http({
                method: 'GET',
                url: '/backend/deputy/district/' + $scope.user.tvo_id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.user = response.data.User;
                    console.log($scope.user);
                }
            });
        };

        $scope.getuser();
        
        $scope.request = {};
        
        $scope.save = function() {
            
        };
        
    }]);
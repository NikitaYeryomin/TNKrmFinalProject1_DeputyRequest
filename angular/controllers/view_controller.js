app.controller('ViewController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.getuser = function() {
            $http({
                method: 'GET',
                url: '/backend/user/get/' + $rootScope.currentUser.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.user = response.data.User;
                    $scope.district = response.data.District;
                    $scope.deputy = response.data.Deputy;
                }
            });
        };
        
        $scope.get_request = function() {
            $http({
                method: 'GET',
                url: '/backend/dep_request/get/' + $scope.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.request = response.data.Request;
                    console.log($scope.request);
                }
            });
        };
        
        $scope.getuser();
        
        $scope.get_request();
        
    }]);
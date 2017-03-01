app.controller('ViewController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.id = $stateParams.id;
        
        $scope.getuser = function() {
            $http({
                method: 'GET',
                url: '/backend/user/get/' + $scope.request.user_id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.user = response.data.User;
                    $scope.district = response.data.District;
                    $scope.deputy = response.data.Deputy;
                    //console.log($scope.user);
                    //console.log($scope.district);
                    //console.log($scope.deputy);
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
                    $scope.getuser();
                    //console.log($scope.request);
                }
            });
        };
        
        $scope.get_request();
        
        $scope.respond = function() {
                
        }
        
        $scope.reject = function() {
            
        };
        
        $scope.meeting = function() {
            
        };
        
        $scope.save = function() {
            $http({
                method: 'POST',
                url: '/backend/dep_request/save/' + $scope.id
            }).then(function(response) {
                
            });
        };
        
        $(document).submit(function(){
            $('.modal').modal('hide');
        });
        
    }]);
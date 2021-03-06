app.controller('RequestsController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.type = $stateParams.type;
        
        $scope.get_requests = function() {
            // get requests
            $http({
                method: 'GET',
                url: '/backend/dep_request/allrequests'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.requests = response.data.Requests;
                    //console.log($scope.requests);
                    //console.log($scope.type);
                }
            });
            // get deputies
            $http({
                method: 'GET',
                url: '/backend/deputy',
            }).then(function(response) {
                //console.log(response.data);
                $scope.deputies = response.data.deputies;
            });
        };
        
        $scope.get_requests();
        
    }]);
app.controller('OfficeController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {

        $scope.get_requests = function() {
            if ($rootScope.currentUser.deputy_id) {
                //console.log($scope.deputyid);
                /*
                $http({
                    method: 'GET',
                    url: '/backend/deputy/id/' + $rootScope.currentUser.deputy_id
                }).then(function(response) {
                    if (response.data.error == 0) {
                        $scope.deputy = response.data.deputy;
                        //console.log($scope.deputy);
                    }
                });
                */
                $http({
                    method: 'GET',
                    url: '/backend/dep_request/deprequests/' + $rootScope.currentUser.deputy_id
                }).then(function(response) {
                    if (response.data.error == 0) {
                        $scope.requests = response.data.Requests;
                        //console.log($scope.requests);
                    }
                });
            }
        };
        
        $scope.get_requests();
        
    }]);
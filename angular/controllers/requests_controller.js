app.controller('RequestsController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.type = $stateParams.type;
        
        $scope.get_requests = function() {
            $http({
                method: 'GET',
                url: '/backend/dep_request/allrequests'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.requests = response.data.Requests;/*
                    for (var i = 0; i < $scope.requests.length; i++) {
                        //$scope.requests[i].adddate=humantime($scope.requests[i].adddate);
                    }*/
                    //console.log($scope.requests);
                    //console.log($scope.type);
                }
            });
        };
        
        $scope.get_requests();
        
    }]);
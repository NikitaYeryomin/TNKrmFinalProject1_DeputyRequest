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
                    //console.log($scope.user);
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
                    $scope.request.adddate = humantime($scope.request.adddate);
                    if ($scope.request.ansdate) {
                        $scope.request.ansdate = humantime($scope.request.ansdate);
                    }
                    $scope.getuser();
                    //console.log($scope.request);
                }
            });
        };
        
        $scope.get_request();
        
        $scope.respond = function() {
            $scope.data = $.param({
                'response': $scope.request.response,
                'status': 'answered'
            });
            $scope.save();
        };
        
        $scope.reject = function() {
            $scope.data = $.param({
                'response': $scope.request.response,
                'status': 'rejected'
            });
            $scope.save();
        };
        
        $scope.meeting = function() {
            $scope.data = $.param({
                'response': 'Вам призначено зустріч: ' + $scope.request.response,
                'status': 'answered'
            });
            $scope.save();
        };
        
        $scope.save = function() {
            $http({
                method: 'POST',
                url: '/backend/dep_request/save/' + $scope.id,
                data: $scope.data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/office');
                }
            });
        };
        
        $(document).submit(function(){
            $('.modal').modal('hide');
        });
        
    }]);
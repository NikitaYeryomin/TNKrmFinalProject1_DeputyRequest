app.controller('AppController', ['$scope', '$rootScope', '$http', '$state',
    function($scope, $rootScope, $http, $state) {

        $scope.logout = function() {
            $http({
                method: "POST",
                url: '/backend/user/logout',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function() {
                window.location.href = '/';
            });
        };

        function getCurrentUser() {
            $http({
                method: 'GET',
                url: '/backend/user/current'
            }).then(function(response) {
                console.log(response.data);
                if (response.data.error) {
                    console.log('Error getting user info!');
                    return;
                }
                $rootScope.currentUser = response.data.currentUser;
                if ($rootScope.currentUser) {
                    $rootScope.logged_in = true;
                }/*
                $rootScope.logged_in = false;
                console.log('logged_in = ' + $rootScope.logged_in);*/
            });
        }
        getCurrentUser();
        
        $scope.count = {};
        
        $scope.request_count = function(){
            $http({
                method: 'GET',
                url: 'backend/dep_request/count'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.count = response.data;
                    console.log($scope.count);
                }
            });
        };
        
        $scope.request_count();
        
        $scope.reg_dep = function(){
            $http({
                method: 'GET',
                url: 'backend/deputy/filter_dep'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.deputies = response.data.deputies;
                    console.log($scope.deputies);
                }
            });
        };
        
        $scope.reg_dep();
        
        $scope.fullname = function(user){
            return user.lastname + " " + user.firstname + " " + user.secondname;
        };

    }]);

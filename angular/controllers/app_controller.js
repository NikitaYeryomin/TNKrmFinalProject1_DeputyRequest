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
                //console.log(response.data);
                if (response.data.error) {
                    //console.log('Error getting user info!');
                    return;
                }
                $rootScope.currentUser = response.data.currentUser;
                //console.log('$rootScope (AppController)');
                //console.log($rootScope);
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
                //console.log(response);
                if (response.data.error == 0) {
                    $scope.count = response.data;
                    //console.log($scope.count);
                    if (($scope.count.answer % 10 >= 1 && $scope.count.answer % 10 <= 4) && ($scope.count.answer < 10 || $scope.count.answer > 20))
                    {$scope.count.answer+=' звернення';}
                    else {$scope.count.answer+=' звернень';}
                    if (($scope.count.review % 10 >= 1 && $scope.count.review % 10 <= 4) && ($scope.count.review < 10 || $scope.count.review > 20))
                    {$scope.count.review+=' звернення';}
                    else {$scope.count.review+=' звернень';}
                    if (($scope.count.all % 10 >= 1 && $scope.count.all % 10 <= 4) && ($scope.count.all< 10 || $scope.count.all > 20))
                    {$scope.count.all+=' звернення';}
                    else {$scope.count.all+=' звернень';}
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
                    //console.log($scope.deputies);
                }
            });
        };
        
        $scope.reg_dep();
        
        $scope.users_count = function(){
            $http({
                method: 'GET',
                url: 'backend/user/count'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.userscount = response.data.users;
                    //console.log($scope.deputies);
                }
            });
        };
        
        $scope.users_count();
        
        $scope.fullname = function(user){
            return user.lastname + " " + user.firstname + " " + user.secondname;
        };

    }]);
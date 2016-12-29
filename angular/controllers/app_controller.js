app.controller('AppController', ['$scope', '$rootScope', '$http', '$location', 'Page',
    function($scope, $rootScope, $http, $location, Page) {

        $scope.Page = Page;
        Page.setTitle("Система online-звернень до депутатів місцевих рад");

        $scope.logout = function() {
            $http({
                method: "POST",
                url: '/backend/users/logout',
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
                url: '/backend/users/current'
            }).then(function(response) {
                console.log(response.data);
                if (response.data.error) {
                    console.log('Error getting user info!');
                    return;
                }
                $rootScope.currentUser = response.data.currentUser;
                if ($rootScope.currentUser) {
                    $rootScope.logged_in = true;
                }
            });
        }
        getCurrentUser();
        
        $scope.fullname = function(user){
            return user.lastname + " " + user.firstname + " " + user.secondname;
        };

    }]);

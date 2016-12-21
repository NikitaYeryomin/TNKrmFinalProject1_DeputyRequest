app.controller('AppController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page',
    function($scope, $rootScope, $http, $location, $state, Page) {

        $scope.Page = Page;

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
                if ($rootScope.currentUser && $rootScope.currentUser.role == 'admin') {
                    $rootScope.logged_in = true;
                }
                else {
                    window.location.href = '/';
                }

            });
        }
        getCurrentUser();
        
        $scope.fullname = function(user){
            return user.lastname + " " + user.firstname + " " + user.secondname;
        };

        $rootScope.$on('$viewContentLoaded', function(event, toState){
            if ($('#left_sidebar').is(':visible')) {
                $('#main_content').css('margin-left', '175px');
            }

        })

    }]);

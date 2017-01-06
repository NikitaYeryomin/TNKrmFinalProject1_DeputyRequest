app.controller('AppController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page',
    function($scope, $rootScope, $http, $location, $state, Page) {

        $scope.Page = Page;

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
        
        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Підтвердження видалення користувача')
                .textContent('Ві дійсно бажаєте видалити користувача?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Так')
                .cancel('Ні');
        
            $mdDialog.show(confirm).then(function() {
                $scope.status = 'You decided to get rid of your debt.';
            }, function() {
                $scope.status = 'You decided to keep your debt.';
            });
        };

    }]);

app.controller('UserController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, Page, $stateParams) {

        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }
        
        $scope.user = {};

        $scope.register = function() {
            $http({
                method: 'POST',
                url: '/backend/user/register',
                data: $.param({
                    'firstname' : $scope.user.name,
                    'secondname': $scope.user.patronymic,
                    'lastname'  : $scope.user.surname,
                    'email'     : $scope.user.email,
                    'phone'     : $scope.user.phone,
                    'password'  : $scope.user.password,
                    'city_id'   : $scope.user.city_id,
                    'street'    : $scope.user.street,
                    'home'      : $scope.user.home
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    console.log('redirecting to mainpage...');
                    $rootScope.logged_in = true;
                    $rootScope.currentUser = response.data.currentUser;
                    if ($rootScope.returnUrl) {
                        $location.path($rootScoope.returnUrl);
                        $rootScope.returnUrl = '';
                    } else {
                        $location.path('/user');
                    }
                }
            });
        };

    }]);
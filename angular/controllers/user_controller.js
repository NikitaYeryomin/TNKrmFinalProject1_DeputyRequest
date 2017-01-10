app.controller('UserController', ['$scope', '$http', '$location', '$state', 'Page', '$stateParams',
    function($scope, $http, $location, $state, Page, $stateParams) {

        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }
        $scope.user = {};

        $scope.register = function() {
            $scope.test1 = 'test1';
            console.log($scope);
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
                    'city'      : $scope.user.city,
                    'street'    : $scope.user.street,
                    'home'      : $scope.user.home,
                    'emaild'    : $scope.user.emailDelivery
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                console.log(response.data);
                if (response.data.error == 0) {
                    $rootScope.logged_in = true;
                    $rootScope.currentUser = response.data.currentUser;
                    $location.path('/districts');
                }
            });
        };

    }]);
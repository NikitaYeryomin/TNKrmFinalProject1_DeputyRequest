app.controller('UserController', ['$scope', '$http', '$location', '$state', 'Page', '$stateParams',
    function($scope, $http, $location, $state, Page, $stateParams) {

        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }
        
        $scope.register = function() {
            $http({
                method: 'POST',
                url: '/backend/user/register',
                data: $.param({
                    'firstname' : $scope.Name,
                    'secondname': $scope.Patronymic,
                    'lastname'  : $scope.Surname,
                    'email'     : $scope.Email,
                    'phone'     : $scope.Phone,
                    'password'  : $scope.Password,
                    'city'      : $scope.City,
                    'street'    : $scope.Street,
                    'home'      : $scope.Home,
                    'emaild'    : $scope.EmailDelivery
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
        }

    }]);
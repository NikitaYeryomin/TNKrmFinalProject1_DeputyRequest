/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('UserController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page',
    function($scope, $rootScope, $http, $location, $state, Page) {
        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }

        $scope.getuser = function(userId) {
            $http({
                method: 'GET',
                url: '/backend/manage/user/get/' + userId
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.user = response.data.User;
                    $scope.cities = response.data.CityList;
                } else {
                    console.log('Error getting user info!');
                    return;
                }
            });            
        };
        
        $scope.saveuser = function(userId) {
            $http({
                method: 'POST',
                url: '/backend/manage/user/save/' + userId,
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
                    'role'      : $scope.user.role
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    //
                }
            });
        };

    }]);
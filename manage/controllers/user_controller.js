/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('UserController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams', 'Page',
    function($scope, $rootScope, $http, $location, $state, $stateParams, Page) {
        $scope.id = $stateParams.userId;
        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }

        $scope.getuser = function() {
            //console.log($scope.id);
            $http({
                method: 'GET',
                url: '/backend/manage/user/get/' + $scope.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.user = response.data.User;
                    $scope.cities = response.data.CityList;
                    //console.log($scope.user);
                    //console.log($scope.cities);
                } else {
                    console.log('Error getting user info!');
                    return;
                }
                $location.path('/user/' + $scope.id);
            });            
        };
        
        $scope.getuser();
        
        $scope.user = {};
        
        $scope.saveuser = function() {
            $http({
                method: 'POST',
                url: '/backend/manage/user/save/' + $scope.id,
                data: $.param({
                    'firstname' : $scope.user.firstname,
                    'secondname': $scope.user.secondname,
                    'lastname'  : $scope.user.lastname,
                    'email'     : $scope.user.email,
                    'phone'     : $scope.user.phone,
                    'password'  : $scope.user.password,
                    'city'      : $scope.user.cities,
                    'street'    : $scope.user.street,
                    'home'      : $scope.user.home,
                    'role'      : $scope.user.role
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    //console.log(response.data);
                    //$location.path('/users');
                }
            });
        };

    }]);
/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('UserController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams', 'Page',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.id = $stateParams.userId;

        $scope.getuser = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/user/get/' + $scope.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.user = response.data.User;
                    $scope.cities = response.data.CityList;
                    // getting list of user's roles
                    var roles = response.data.Roles[0]['Type'];
                    roles = roles.substring(roles.indexOf('(') + 1, roles.indexOf(')'));
                    roles = roles.replace(/'/g, "");
                    $scope.roles = roles.split(",");
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
                    'city_id'   : $scope.user.city_id,
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
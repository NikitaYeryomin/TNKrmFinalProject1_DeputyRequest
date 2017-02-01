/***************************************** АДминка **************/

app.controller('DeputyController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {
        
        $scope.deputies = function() {
            $http({
                method: 'GET',
                url: '/backend/deputy/index',
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.deputies = response.data.deputies;
                }
            });
        };
        
        $scope.users();
        
        $scope.deleteuser = function(userId) {
            $http({
                method: 'GET',
                url: '/backend/manage/user/delete/' + userId
            }).then(function(response) {
                if (response.data.error == 0) {
                    console.log(response.data.error);
                    $scope.users();
                }
            });
        };
    }]);
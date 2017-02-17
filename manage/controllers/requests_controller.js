/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('RequestsController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {
        
        $scope.get_requests = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/request'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.requests = response.data.Requests;
                    //console.log($scope.requests);
                }
            });
        };
        
        $scope.get_requests();

        $scope.confirm_delete = function(user) {
            $scope.current_user_id = user.userid;
            $scope.current_user_name = $scope.fullname(user);
            console.log("confirm delete: " + $scope.current_user_id);
        };
        
        $scope.delete_request = function(request_id) {
            //console.log("delete request: " + request_id);
            $http({
                method: 'GET',
                url: '/backend/manage/request/delete/' + request_id
            }).then(function(response) {
                if (response.data.error == 0) {
                    //console.log(response.data);
                    $scope.get_requests();
                }
            });
        };
    }]);
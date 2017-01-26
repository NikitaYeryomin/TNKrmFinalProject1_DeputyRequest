app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {

        $scope.getuser = function() {
            if (!$rootScope.logged_in) {
                $rootScope.returnUrl = '/request';
                //console.log($rootScope.returnUrl);
                $location.path('/login');
            } else {
                $http({
                    method: 'GET',
                    url: '/backend/user/get/' + $rootScope.currentUser.id
                }).then(function(response) {
                    if (response.data.error == 0) {
                        $scope.user = response.data.User;
                        //$scope.deputy = response.data.Deputy;
                        console.log($scope.user);
                        //console.log($scope.deputy);
                    }
                });
            }
        };
        
         $scope.requestTypes = [{
            Title: 'Матеріальна допомога',
            Name: 'request.material'
            }, {
            Title: 'Моральна допомога',
            Name: 'request.moral'
         }];
    
        $scope.changeState = function (stateName) {
            console.log(stateName);
            $state.go(stateName);
        }
        
       

        $scope.getuser();
        
        $scope.request = {};
        
        $scope.save = function() {
            
        };
        
    }]);
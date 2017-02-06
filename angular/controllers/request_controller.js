app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function ($scope, $rootScope, $http, $location, $state, $stateParams) {

        $scope.getuser = function () {
            if (!$rootScope.logged_in) {
                $rootScope.returnUrl = '/request';
                //console.log($rootScope.returnUrl);
                $location.path('/login');
            } else {
                $http({
                    method: 'GET',
                    url: '/backend/user/get/' + $rootScope.currentUser.id
                }).then(function (response) {
                    if (response.data.error == 0) {
                        $scope.user = response.data.User;
                        $scope.district = response.data.District;
                        $scope.deputy = response.data.Deputy;
                        //$scope.deputy = response.data.Deputy;
                        //console.log($scope.user);
                        //console.log($scope.deputy);
                    }
                });
            }
        };
        
        $scope.getuser();

        $scope.request = {};
        $scope.request.public_appeal = true;
        console.log('1: ' + $scope.request);
        $scope.add_request = function () {
            console.log('2: ' + $scope.request);
            $http({
                method: 'POST',
                url: '/backend/dep_request/add',
                data: $.param({
                    'form': $scope.request.form,
                    'public_appeal': $scope.request.public_appeal
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (response) {

                console.log(response.data);
            });
        };

        $scope.requestTypes = [{
            Title: 'Довільне звернення',
            Name: 'request.custom'
        }, {
            Title: 'Матеріальна допомога',
            Name: 'request.material'
        }, {
            Title: 'Моральна допомога',
            Name: 'request.moral'
        }];

        $scope.changeState = function (stateName) {
            console.log(stateName);
            $state.go(stateName);
        };

        //$scope.getuser();

        $scope.save = function () {

        };

    }]);
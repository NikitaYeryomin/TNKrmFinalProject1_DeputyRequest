app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {

        $scope.getuser = function() {
            if (!$rootScope.logged_in) {
                $rootScope.returnUrl = '/request/custom';
                //console.log($rootScope.returnUrl);
                $location.path('/login');
            } else {
                $http({
                    method: 'GET',
                    url: '/backend/user/get/' + $rootScope.currentUser.id
                }).then(function(response) {
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
        
        
        $scope.request = {};
        $scope.request.public_appeal = true;
        $scope.add_request = function() {
            console.log($scope.request);
            $http({
                method: 'POST',
                url: '/backend/dep_request/add',
                data: $.param({
                    'deputy_id' : $scope.deputy.id,
                    'text' : $scope.request.text,
                    'public_appeal' : $scope.request.public_appeal
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                $location.path('/user')
                //console.log(response.data);
            });
        };
        
        $scope.requestTypes = [{
            Title: 'Довільне звернення',
            Name: 'request.custom'
            },{
            Title: 'Матеріальна допомога',
            Name: 'request.material'
            }, {
            Title: 'Довідка про непроживання',
            Name: 'request.living'
            }, {
            Title: 'Довідка про склад сім\'ї',
            Name: 'request.family'
        }];
    
        $scope.changeState = function (stateName) {
            console.log(stateName);
            $state.go(stateName);
        };
        
        $scope.getuser();

        $scope.save = function() {
            
        };
        
        
        $scope.data = {};
        $scope.instruction_parts = {
            'pensioner' : 'Копия удостоверения..',
            'disabled person' : 'Справка МСЭК..'
        }
        
        $scope.getMaterialInstructions = function() {
            console.log('getMaterialInstructions');
            $scope.instructions = [];
            if ($scope.data.pensioner) {
                 $scope.instructions.push( $scope.instruction_parts['pensioner']);
            }
            console.log($scope.data);
            console.log($scope.instructions);
            console.log($state.current.name);
        }
        
    }]);
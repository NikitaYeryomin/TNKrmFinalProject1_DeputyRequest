app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        $rootScope.$state = $state;
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
            var req_Type = $state.current.name.split('.');
            if (req_Type[1] == 'material')
            {
                $scope.request.text = 'Матеріальна допомога';
                $scope.request.public_appeal = false;
                console.log('Іф працює');
            }
            console.log(req_Type);
            $http({
                method: 'POST',
                url: '/backend/dep_request/add',
                data: $.param({
                    'type' : req_Type[1],
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
            if (stateName == 'request.material') {
                $rootScope.show_survey = true;
            }
            $state.go(stateName);
        };
        
        $scope.getuser();

        $scope.save = function() {
            
        };
        
        
        $scope.data = {};
        $scope.instruction_parts = {
            'pensioner' : 'Копия удостоверения..',
            'disabled_person' : 'Справка МСЭК..',
            'war_veteran' : 'Удостоверение ветерана..',
        }
        
        $scope.getMaterialInstructions = function() {
            console.log('getMaterialInstructions');
            $scope.instructions = [];
            if ($scope.data.pensioner) {
                 $scope.instructions.push( $scope.instruction_parts['pensioner']);
            }
            if ($scope.data.disabled_person) {
                 $scope.instructions.push( $scope.instruction_parts['disabled_person']);
            }
            if ($scope.data.war_veteran) {
                 $scope.instructions.push( $scope.instruction_parts['war_veteran']);
            }
            $rootScope.show_survey = false;
            
            console.log($scope);
            var test = $state.current.name =='request.material' && $rootScope.show_survey == true;
            console.log('$state.current.name == request.material && show_survey == true : ' + test);
        }
        
        
        
    }]);
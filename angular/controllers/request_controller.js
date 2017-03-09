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
                        $scope.deputies = response.data.Deputy;
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
            //console.log($scope.request);
            var req_Type = $state.current.name.split('.');
            if (req_Type[1] == 'material')
            {
                $scope.request.text = 'Матеріальна допомога';
                $scope.request.public_appeal = false;
                //console.log('Іф працює');
            }
            //console.log(req_Type);
            var id;
            if ($scope.deputies.length == 1) {
                id = $scope.deputies[0].id;
            } else {
                id = $scope.deputy.id;
            }
            //console.log(id);
            $http({
                method: 'POST',
                url: '/backend/dep_request/add',
                data: $.param({
                    'type' : req_Type[1],
                    'deputy_id' : id,
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
            //console.log(stateName);
            if (stateName == 'request.material') {
                $rootScope.show_survey = true;
            }
            $state.go(stateName);
        };
        
        $scope.getuser();

        $scope.data = {};
        $scope.instruction_parts = {
            'adult' : 'Справка о складі сімї (діє 10 днів)..',
            'minor' : 'Справка із дитячого садка, школи або іншого закладу',
            'pensioner' : ['Справка о доходах із ПФУ','Копія посвідчення'],
            'disabled_person' : ['Справка МСЕК', 'Справка о доходах із УСЗН'],
            'war_veteran' : 'Посвідчення ветерана..',
            'ato_participant' : 'Посвідчення учасника АТО..',
            'employed' : 'Справка о доходах кожного повнолітнього члена сімї..',
            'unemployed' : 'Копія першої і останньої сторінки трудової книжки',
            'disease' : 'Справка від лікаря',
            'fire' : 'Акт пожежної інспекції',
            'bomb' : 'Акт из управління ЖКГ',
            'material_damage' : 'Акт о матерільних збитках',
        }
        
        $scope.getMaterialInstructions = function() {
            //console.log('getMaterialInstructions');
            $scope.instructions = [];
            if ($scope.data.pensioner) {
                 $scope.instructions.push( $scope.instruction_parts['pensioner'[0]]);
                 $scope.instructions.push( $scope.instruction_parts['pensioner'[1]]);
            }
            if ($scope.data.disabled_person) {
                 $scope.instructions.push( $scope.instruction_parts['disabled_person'][0]);
                 $scope.instructions.push( $scope.instruction_parts['disabled_person'][1]);
                
            }
            if ($scope.data.war_veteran) {
                 $scope.instructions.push( $scope.instruction_parts['war_veteran']);
            }
            if ($scope.data.ato_participant) {
                 $scope.instructions.push( $scope.instruction_parts['ato_participant']);
            }
            if ($scope.data.adult) {
                 $scope.instructions.push( $scope.instruction_parts['adult']);
            }
            if ($scope.data.minor) {
                 $scope.instructions.push( $scope.instruction_parts['minor']);
            }
            if ($scope.data.employed) {
                 $scope.instructions.push( $scope.instruction_parts['employed']);
            }
            if ($scope.data.unemployed) {
                 $scope.instructions.push( $scope.instruction_parts['unemployed']);
            }
            if ($scope.data.employed) {
                 $scope.instructions.push( $scope.instruction_parts['employed']);
            }
            if ($scope.data.fire) {
                 $scope.instructions.push( $scope.instruction_parts['fire']);
            }
            if ($scope.data.bomb) {
                 $scope.instructions.push( $scope.instruction_parts['bomb']);
            }
            if ($scope.data.material_damage) {
                 $scope.instructions.push( $scope.instruction_parts['material_damage']);
            }
            $rootScope.show_survey = false;
            
            //console.log($scope);
            var test = $state.current.name =='request.material' && $rootScope.show_survey == true;
            //console.log('$state.current.name == request.material && show_survey == true : ' + test);
        }
        
    }]);
/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('RequestController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.id = $stateParams.requestId;
        
        $scope.get_request = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/request/get/' + $scope.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.request = response.data.Request;
                    $scope.request.public_appeal = ($scope.request.public_appeal == 1);
                    //console.log($scope.request);
                    $scope.types = $scope.transform(response.data.Types);
                    $scope.states = $scope.transform(response.data.States);
                    //console.log($scope.types);
                    //console.log($scope.states);
                } else {
                    console.log('Error getting request info!');
                    return;
                }
                $location.path('/request/' + $scope.id);
            });            
        };
        
        $scope.transform = function(inp) {
            var str = inp[0]['Type'];
            str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
            str = str.replace(/'/g, "");
            return str.split(",");
        };
        
        $scope.get_request();
        
        $scope.save_request = function() {
            $http({
                method: 'POST',
                url: '/backend/manage/request/save/' + $scope.id,
                data: $.param({
                    'status': $scope.request.status,
                    'type': $scope.request.type,
                    'text': $scope.request.text,
                    'response': $scope.request.response,
                    'public_appeal': $scope.request.public_appeal
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/requests');
                }
            });
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.popup1 = {
            opened: false
        };

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }
    }]);
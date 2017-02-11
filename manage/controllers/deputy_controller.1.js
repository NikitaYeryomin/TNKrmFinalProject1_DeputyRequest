app.controller('DeputyController', ['$scope', '$http', '$location', '$state', '$stateParams',
   function($scope, $http, $location , $state, $stateParams) {$scope.id = $stateParams.id;   }
    ])
/******************************************список депутатов*************************************************/
.directive('deputiesList', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/deputy/index',
        }).then(function(response) {
            console.log(response.data);
            $scope.deputies = response.data.deputies;
        });
    };
    return {
        restrict: 'A',
        template: '<div id="deputies-list"></div>',
        replace: true,
        link: link
    };
}])
/*************************************один депутат****************************************************/
.directive('deputyPage', ['$http','$location', function($http) {
    var link = function($scope, element) {
       $http({
            method: 'GET',
             url: '/backend/deputy/viewandedit/' + $scope.id
        }).then(function(response) {
            console.log(response.data);
            $scope.deputy = response.data.deputy;
            $scope.tvo=response.data.tvo;
            var i;
            for (i = 0; i < $scope.tvo.length; i++) {
               if ($scope.tvo[i].id==0)
               {$scope.tvo[i].text='лідер списку';}
               else {$scope.tvo[i].text=$scope.tvo[i].id;}
            }
            $scope.parties=response.data.parties;
            $scope.sexes=response.data.sexes;
            $scope.users=response.data.users;
            
//                    $scope.deputy = {};
        
        $scope.savedeputy = function() {
            $http({
                method: 'POST',
                url: '/backend/deputy/editandsave/' + $scope.id,
                data: $.param({
                    'surname' : $scope.deputy.surname,
                    'name': $scope.deputy.name
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/deputies');
                }
            });
        };
            
        });
    };
    return {
        restrict: 'A',
        replace: true,
        link: link
    };
    
    
    
}])



;
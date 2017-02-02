app.controller('DeputyController', ['$scope', '$http', '$location', '$state', '$stateParams',
   function($scope, $http, $location, $state, $stateParams) {$scope.id = $stateParams.id;}
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
/*************************************депутат****************************************************/
.directive('deputyPage', ['$http', function($http) {
    var link = function($scope, element) {
       $http({
            method: 'GET',
             url: '/backend/deputy/id/' + $scope.id
        }).then(function(response) {
            console.log(response.data);
            $scope.deputy = response.data.deputy;
            if ($scope.deputy.sex=="f"){$scope.deputy.sexfix="а";}
            if ($scope.deputy.sex=="m"){$scope.deputy.sexfix="ий";}
            $scope.deputy.tvourl="#!/tvo/"+$scope.deputy.tvoid;
            if ($scope.deputy.tvoid!="0"){
                $scope.deputy.listfix2="за списком ";
                $scope.deputy.listfix1="територіального виборчого округу № ";
            }
            if ($scope.deputy.tvoid=="0"){
                $scope.deputy.tvoid="";
                $scope.deputy.listfix3=" як лідер списку";
            }
        });
    };
    return {
        restrict: 'A',
       // template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}])
;
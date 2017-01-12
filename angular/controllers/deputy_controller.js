app.controller('DeputyController', ['$scope', '$http', '$location', '$state', 'Page', '$stateParams',
    function($scope, $http, $location, $state, Page, $stateParams) {
        $scope.districtId = $stateParams.districtId;

        /*if ($state.current.data != undefined) {
            if ($state.current.name == 'district') {
                Page.setTitle($scope.districtId);
            }
            else {
                Page.setTitle($state.current.data.title);
            }
        }
*/
  }])
/******************************************список депутатов*****************************************************/
.directive('deputiesList', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/deputy/index',
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            console.log(response.data);
            $scope.deputies = response.data.deputies;
        });
    };
    return {
        restrict: 'A',
       // template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}])
/*************************************депутат****************************************************/
.directive('deputyPage', ['$http', function($http) {
    var link = function($scope, element) {
       $http({
            method: 'GET',
             url: '/backend/deputy/index/' + $scope.districtId
        }).then(function(response) {
            console.log(response.data);
            $scope.deputies = response.data.deputies;
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
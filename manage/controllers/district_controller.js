app.controller('DistrictController', ['$scope', '$http', '$location', '$state', '$stateParams',
    function($scope, $http, $location, $state, $stateParams) {
        $scope.id = $stateParams.id;
  }])

/******************************************список участков*************************************************/
.directive('districtsList', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/districts/index',
        }).then(function(response) {
            console.log(response.data);
            $scope.districts = response.data.districts;
            $scope.places = response.data.places;
        });
    };
    return {
        restrict: 'A',
        template: '<div id="districts-list"></div>',
        replace: true,
        link: link
    };
}])

;
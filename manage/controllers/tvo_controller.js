app.controller('TvoController', ['$scope', '$http', '$location', '$state', '$stateParams',
   function($scope, $http, $location , $state, $stateParams){
       $scope.id = $stateParams.id;  
        $scope.add_tvo = function(user_id) {
            //console.log("add tvo");
            $http({
                method: 'GET',
                url: '/backend/tvo/add/'
            }).then(function(response) {
                if (response.data.error == 0) {
                    //console.log(response.data.error);
                   $location.path('/tvo');  
                }
            });
        };   

        $scope.tvo = {};
        $scope.savetvo = function() {
        $http({
            method: 'POST',
            url: '/backend/tvo/save/' + $scope.id,
            data: $.param({
                'electorate' : $scope.tvo.electorate
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {if (response.data.error == 0){$location.path('/tvo');}});
    };


}])
/******************************************список *************************************************/
.directive('tvoList', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/tvo/all',
        }).then(function(response) {
            //console.log(response.data);
            $scope.tvo = response.data.tvo;
            $scope.districts = response.data.districts;
        });
    };
    return {
        restrict: 'A',
        replace: true,
        link: link
    };
}])

/******************************************редактирование *************************************************/
.directive('editTvo', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/tvo/view/' + $scope.id,
        }).then(function(response) {
            //console.log(response.data);
            $scope.tvo = response.data.tvo;
            $scope.districts = response.data.districts;
        });
    };
    return {
        restrict: 'A',
        replace: true,
        link: link
    };
}])

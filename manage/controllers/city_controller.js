app.controller('CityController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page',
    function($scope, $rootScope, $http, $location, $state, Page) {
        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }
        
        $scope.city = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/city',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.сities = response.data.CityList;
                    console.log($scope.сities);
                }
            });
        };
        
        $scope.city();


    }]);
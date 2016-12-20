app.controller('ManageController', ['$scope', '$rootScope', '$http', '$location', 'Page', 
    function($scope, $rootScope, $http, $location, Page) {
        
        Page.setTitle("Адміністрування системи");
        
        $scope.manage = function() {
            $location.path('/manage');
        };
        
        $scope.manage();
    }]);
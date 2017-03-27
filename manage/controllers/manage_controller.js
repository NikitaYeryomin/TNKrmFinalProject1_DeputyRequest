/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('ManageController', ['$scope', '$rootScope', '$http', '$location', '$state',
    function($scope, $rootScope, $http, $location, $state) {

   // $scope.news = {};
    
    $scope.get_news = function() {
        $http({
            method: 'GET',
            url:    '/backend/manage/news'
        }).then(function(response) {
            if (response.data.error == 0) {
                $scope.news = response.data.News;
            }
        });
    };
    
    $scope.get_news();
    
    $scope.save_news = function() {
        $http({
            method: 'POST',
            url:    '/backend/manage/news/save',
            data: $.param({
                'text': $scope.news.text
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {
            if (response.data.error == 0) {
                $scope.get_news();
            }
        });
    };

    }]);
app.controller('DeputyController', ['$scope', '$http', '$location', '$state', '$stateParams',//'items',
   function($scope, $http, $location, $state, $stateParams  ) {$scope.id = $stateParams.id;   }
    ])
/******************************************список депутатов*************************************************/
.directive('deputiesList', ['$http', function($http) {
    var map, infoWindow;
    var link = function($scope, element, attrs) {
        $http({
            method: 'GET',
            url: '/backend/deputy/index',
        }).then(function(response) {
            //console.log(response.data);
            $scope.deputies = response.data.deputies;
            var i;
            for (i = 0; i < $scope.deputies.length; i++) {
               if ($scope.deputies[i].tvoid==0){
                   $scope.deputies[i].ifLeader='лідер списку';
                   $scope.deputies[i].tvoid=null;
               }
            }
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
.directive('deputyPage', ['$http', function($http) {
    var link = function($scope, element) {
       $http({
            method: 'GET',
             url: '/backend/deputy/id/' + $scope.id
        }).then(function(response) {
            //console.log(response.data);
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
            if ($scope.deputy.user_id!=null){$scope.deputy.confirmed="цей депутат офіційно зареєстрований у системі та може особисто відповідати на ваші звернення тут";}
        });
        $http({
            method: 'GET',
            url: '/backend/dep_request/deprequests/' + $scope.id
        }).then(function(response) {if (response.data.error == 0) {
            $scope.requests = response.data.Requests;
            var i; $scope.answered=0; $scope.new=0;
            for (i = 0; i < $scope.requests.length; i++) {
                if ($scope.requests[i].status=='answered'){$scope.answered++;}
                if (($scope.requests[i].status=='new') &&
                    ($scope.requests[i].public_appeal == 1)) {
                        $scope.new++;
                    }
                //$scope.requests[i].adddate=humantime($scope.requests[i].adddate);    
            }
            if ($scope.answered==0){$scope.answered='жодного';}
            if ($scope.new==0){$scope.new='жодного нового';}
            else if ($scope.new % 10 ==1){$scope.new+=' нове';}
            else {$scope.new+=' нових';}
            //console.log($scope.requests);
            //console.log($scope);
        }
        });

    };
    //для img:
    var url;
    $(document).ready(function() {$("a.gallery, a.iframe").fancybox();$("a.modalbox").attr("href", url);});    
    return {
        restrict: 'A',
        replace: true,
        link: link
    };
    
}])
;
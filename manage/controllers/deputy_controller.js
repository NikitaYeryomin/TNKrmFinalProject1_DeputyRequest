app.controller('DeputyController', ['$scope', '$http', '$location', '$state', '$stateParams','FileUploader',
   function($scope, $http, $location, $state, $stateParams,FileUploader) {
        $scope.id = $stateParams.id;
        $scope.deputy = {};
        $scope.savedeputy = function() {
        $http({
            method: 'POST',
            url: '/backend/deputy/editandsave/' + $scope.id,
            data: $.param({
                'surname' : $scope.deputy.surname,
                'name': $scope.deputy.name,
                'patronymic': $scope.deputy.patronymic,
                'user_id': $scope.deputy.user_id,
                'bio': $scope.deputy.bio,
                'tvoid': $scope.deputy.tvoid,
                'party_id': $scope.deputy.party_id,
                'sex': $scope.deputy.sex,
                'function': $scope.deputy.function,
                'reception': $scope.deputy.reception,
                'new_id': $scope.new_id,
                'ex_user_id': $scope.deputy.ex_user_id,
                'check': $scope.deputy.check
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(response) {if (response.data.error == 0){$location.path('/deputies');}});
    };

    $scope.uploader = new FileUploader();
    $scope.uploadFile = function(files, type) {
        var form_data = new FormData();
        form_data.append(type, files[0]);
        form_data.append("id", ($scope.new_id));
        //form_data.append("id", (!$scope.new_id?$scope.new_id:$scope.deputy.id));
        $http.post(
            '/backend/manage/upload/uploadDeputyFace/' + type,
            form_data, {
                headers: {'Content-Type': undefined }
            }).then(function(response) {
            console.log(response.data);
        });
    };
}])

/******************************************исправить депутата*************************************************/
.directive('deputyEdit', ['$http', function($http) {
    var link = function($scope, element, attrs) {
       $http({
            method: 'GET',
             url: '/backend/deputy/viewandedit/' + $scope.id
        }).then(function(response) {
           if (response.data.error == 0) {
            console.log(response.data);
            $scope.deputy = response.data.deputy;
            $scope.deputies = response.data.deputies;
            $scope.tvo=response.data.tvo;
            var i;
            for (i = 0; i < $scope.tvo.length; i++) {
               if ($scope.tvo[i].id==0)
               {$scope.tvo[i].text='лідер партійного списку';}
               else {$scope.tvo[i].text=$scope.tvo[i].id;}
            }
            $scope.parties=response.data.parties;
            $scope.sexes=response.data.sexes;
            $scope.users=response.data.users;
            $scope.listtitle=response.data.listtitle;
            $scope.new_id=response.data.new_id!=null?response.data.new_id:$scope.id;
            $scope.deputy.ex_user_id=$scope.deputy.user_id;
            $scope.deputy.checked = ($scope.deputy.checked == 1);
           } else {
                    console.log('Error getting user info!');
                    return;
                }
                //$location.path('/deputy/' + $scope.id);
            });            
        };//link
    return {
        restrict: 'A',
        template: '<div id="deputy-edit"></div>',
        replace: true,
        link: link
    };
    
}])

/******************************************список депутатов*************************************************/
.directive('deputiesList', ['$http', function($http) {
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

;
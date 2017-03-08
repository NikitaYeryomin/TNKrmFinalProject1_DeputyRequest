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
                'ex_user_id': $scope.deputy.ex_user_id
                ,'name_gen_case': $scope.deputy.name_gen_case
                ,'surname_gen_case': $scope.deputy.surname_gen_case
                ,'patronymic_gen_case': $scope.deputy.patronymic_gen_case
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
            if($scope.deputy.surname_gen_case==null){
                var surname_gen_case=$scope.deputy.surname;
                if (surname_gen_case.slice(surname_gen_case.length-2)=='ий'){surname_gen_case=surname_gen_case.slice(0,surname_gen_case.length-2)+'ого';}
                else if (surname_gen_case.slice(surname_gen_case.length-2)=='ов' || surname_gen_case.slice(surname_gen_case.length-2)=='єв' || surname_gen_case.slice(surname_gen_case.length-2)=='ев'){surname_gen_case=surname_gen_case+'а';}
                else if (surname_gen_case.slice(surname_gen_case.length-2)=='ва'||surname_gen_case.slice(surname_gen_case.length-2)=='на'){surname_gen_case=surname_gen_case.slice(0,surname_gen_case.length-1)+'ої';}
                else if (surname_gen_case.slice(surname_gen_case.length-1)=='а'){surname_gen_case=surname_gen_case.slice(0,surname_gen_case.length-1)+'и';}
                else if (surname_gen_case.slice(surname_gen_case.length-1)=='о'&& $scope.deputy.sex=='m'){surname_gen_case=surname_gen_case.slice(0,surname_gen_case.length-1)+'а';}
                else if (surname_gen_case.slice(surname_gen_case.length-1)=='ч'&& $scope.deputy.sex=='m'){surname_gen_case=surname_gen_case+'а';}
                if (surname_gen_case.slice(surname_gen_case.length-1)=='н'){surname_gen_case=surname_gen_case+'а';}
                $scope.deputy.surname_gen_case=surname_gen_case;
            }
            if($scope.deputy.name_gen_case==null){
                var name_gen_case=$scope.deputy.name;
                if (name_gen_case.slice(name_gen_case.length-1)=='р'||name_gen_case.slice(name_gen_case.length-1)=='н' || name_gen_case.slice(name_gen_case.length-1)=='г' || name_gen_case.slice(name_gen_case.length-1)=='с'){name_gen_case=name_gen_case+'а';}
                else if (name_gen_case.slice(name_gen_case.length-1)=='й'){name_gen_case=name_gen_case.slice(0,name_gen_case.length-1)+'я';}
                else if (name_gen_case.slice(name_gen_case.length-1)=='а'){name_gen_case=name_gen_case.slice(0,name_gen_case.length-1)+'и';}
                else if (name_gen_case.slice(name_gen_case.length-1)=='о'){name_gen_case=name_gen_case.slice(0,name_gen_case.length-1)+'а';}
                else if (name_gen_case.slice(name_gen_case.length-1)=='я'){name_gen_case=name_gen_case.slice(0,name_gen_case.length-1)+'ї';}
                $scope.deputy.name_gen_case=name_gen_case;
            }
            if($scope.deputy.patronymic_gen_case==null){
                var patronymic_gen_case=$scope.deputy.patronymic;
                if (patronymic_gen_case.slice(patronymic_gen_case.length-1)=='ч'){patronymic_gen_case=patronymic_gen_case+'а';}
                else if (patronymic_gen_case.slice(patronymic_gen_case.length-1)=='а'){patronymic_gen_case=patronymic_gen_case.slice(0,patronymic_gen_case.length-1)+'и';}
                $scope.deputy.patronymic_gen_case=patronymic_gen_case;
            }
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
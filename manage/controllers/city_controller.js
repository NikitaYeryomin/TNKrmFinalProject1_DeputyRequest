/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('CityController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams', 'FileUploader',
    function($scope, $rootScope, $http, $location, $state, $stateParams, FileUploader) {
        
        $scope.id = $stateParams.cityId;
        
        $scope.city = {};
        
        $scope.getcity = function() {
            if ($scope.id) {
                $http({
                    method: 'GET',
                    url: '/backend/manage/city/get/' + $scope.id
                }).then(function(response) {
                    if (response.data.error == 0) {
                        $scope.city = response.data.City;
                        $scope.city.active = ($scope.city.active == 1);
                        console.log($scope.city);
                    }
                });
            } else {
                $scope.city = {};
                $scope.city.active = true;
            }
        };
        
        $scope.getcity();
        
        $scope.uploader = new FileUploader();
        
        $scope.uploadFile = function(files, type) {
            var form_data = new FormData();
            form_data.append(type, files[0]);
            form_data.append("id", $scope.city.cityid);
            $http.post(
                '/backend/manage/upload/do_upload/' + type,
                form_data, {
                    headers: {'Content-Type': undefined }
                }).then(function(response) {
                //console.log(response.data);
            });
        };
        
        $scope.savecity = function() {
            //console.log($scope.city.active);
            $http({
                method: 'POST',
                url: '/backend/manage/city/save/' + $scope.city.cityid,
                data: $.param({
                    'active' : $scope.city.active
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/cities');
                }
            });
        };
        
        $scope.add_city = function() {
            $http({
                method: 'POST',
                url: '/backend/manage/city/add',
                data: $.param({
                    'city' : $scope.city.city,
                    'region' : $scope.city.region,
                    'active' : $scope.city.active
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    $location.path('/cities');
                }
            });
        };
        /*
        $('#image').change(function(){
            showPreviewImage(this);
        });
        
        $('#image_preview_hidden').change(function(){
            showPreviewImage(this);
        });
        
        function showPreviewImage(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image_preview').attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
        */
    }]);
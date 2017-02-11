/*******************************************************************
****************************** АДминка *****************************
*******************************************************************/

app.controller('CityController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams', 'FileUploader',
    function($scope, $rootScope, $http, $location, $state, $stateParams, FileUploader) {
        
        $scope.id = $stateParams.cityId;
        
        $scope.city = {};
        
        $scope.getcity = function() {
            $http({
                method: 'GET',
                url: '/backend/manage/city/get/' + $scope.id
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.city = response.data.City;
                    //console.log($scope.city);
                }
                //$location.path('/city/' + $scope.id);
            });
        };
        
        $scope.getcity();
        
        $scope.uploader = new FileUploader();
        
        $scope.uploadFile = function(files) {
            
            var form_data = new FormData();
                /*
                form_data.append("avatar", files[0]);
                form_data.append("id", $scope.currentUser.id);
                */
            console.log(files);
                /*
                //тут отправка на сервер
                $http.post(
                    '/administrator/users/upload_image',
                    form_data,
                    {
                        withCredentials: true,
                        headers: {'Content-Type': undefined },
                        transformRequest: angular.identity
                    }).success(function(response) {
                    console.log(response);
                });*/
            };
        
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

    }]);
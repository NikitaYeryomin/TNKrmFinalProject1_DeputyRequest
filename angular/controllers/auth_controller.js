app.controller('AuthController', ['$scope', '$rootScope', '$http', '$location', '$state', 'Page',
    function($scope, $rootScope, $http, $location, $state, Page) {
        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);
        }

        $scope.login = function() {
            if ($scope.email == '') {
                //$scope.showErrorMessageNullEmailAdmin = true;
                //$scope.errorMessageNullEmailAdmin = 'Please enter email';
                //$scope.emailRedBorder = 'passwordRedBorder';
            } else {
                //$scope.showErrorMessageNullEmailAdmin = false;
                //$scope.errorMessageNullEmailAdmin = '';
                //$scope.emailRedBorder = '';
                $http({
                    method: 'POST',
                    url: '/backend/users/login',
                    data: $.param({
                        'email': $scope.email,
                        'password': $scope.password
                    }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response) {
                    console.log(response.data);
                    if (response.data.error == 0) {
                        $rootScope.logged_in = true;
                        $rootScope.currentUser = response.data.currentUser;
                        if ($rootScope.currentUser.role == 'admin') {
                            console.log('redirecting to backend...');
                            window.location.href = '/manage';
                            //$location.path('/backend/manage/users')
                        }
                        else {
                            $location.path('/districts');
                        }
                    }

                    // if (response.message == 'email * Enter a valid email address.') {
                    //     $scope.showErrorMessageNullEmailAdmin = true;
                    //     $scope.errorMessageNullEmailAdmin = 'Enter a valid email address';
                    //     $scope.emailRedBorder = 'passwordRedBorder';
                    // } else {
                    //     $scope.showErrorMessageNullEmailAdmin = false;
                    //     $scope.errorMessageNullEmailAdmin = '';
                    //     $scope.emailRedBorder = '';
                    //     $('#saveChanges').modal();
                    // }
                });
            }
        };


    }]);

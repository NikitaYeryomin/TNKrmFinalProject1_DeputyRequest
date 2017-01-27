app.controller('UserController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.user = {};

        $scope.register = function() {
            $http({
                method: 'POST',
                url: '/backend/user/register',
                data: $.param({
                    'firstname' : $scope.user.name,
                    'secondname': $scope.user.patronymic,
                    'lastname'  : $scope.user.surname,
                    'email'     : $scope.user.email,
                    'phone'     : $scope.user.phone,
                    'password'  : $scope.user.password,
                    'city_id'   : $scope.user.city_id,
                    'street'    : $scope.user.street,
                    'home'      : $scope.user.home
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    console.log('redirecting to mainpage...');
                    $rootScope.logged_in = true;
                    $rootScope.currentUser = response.data.currentUser;
                    var path= '/user';
                    if ($rootScope.returnUrl) {
                        path = $rootScope.returnUrl;
                        $rootScope.returnUrl = null;
                    }
                    $location.path(path);
                }
            });
        };

        $scope.init = function() {
            if (!$rootScope.logged_in) {
                if ($rootScope.returnUrl) {
                    $location.path('/login');
                } else {
                    $location.path('/register');
                }
            } else {
                $http({
                    method: 'GET',
                    url: '/backend/user/getall/' + $rootScope.currentUser.id
                }).then(function(response){
                    if (response.data.error == 0) {
                        $scope.user = response.data.User;
                        $scope.district = response.data.District;
                        $scope.deputy = response.data.Deputy;
                        console.log($scope.user);
                        console.log($scope.district);
                        console.log($scope.deputy);
                    }
                }, function errorCallback(response) {
                    console.log('Заполняем профиль');
                    $http({
                        method: 'GET',
                        url: '/backend/user/get/' + $rootScope.currentUser.id
                    }).then(function(response) {
                        $scope.user = response.data.User;
                        if ($scope.user.tvo_id == 0) {
                            $http({
                                method: 'GET',
                                url: 'https://maps.googleapis.com/maps/api/geocode/json?address='
                                     + $scope.user.city +' ' + $scope.user.street +' ' + $scope.user.home + ' '
                                     + '&sensor=false&language=ru'
                            }).then(function(response) {
                                $scope.user.place = response.data.results[0].geometry.location;
                                console.log($scope.user.place);
                                
                            });
                        }
                    });
                });
            }
        };
        
        $scope.init();
        
        $scope.inpoly = function() {
            
        };
        
        /******************************************************************************/
        /*************** вычисление избирательного участка по адресу ******************/
        /******************************************************************************/
        $scope.detect_tvo = function() {
            $scope.user.tvo_id = 0;
            if ($scope.user.city_id && 
                $scope.user.street && 
                $scope.user.home) {
                $http({
                    method: 'POST',
                    url: '/backend/districts/get_tvo',
                    data: $.param({
                        'city_id' : $scope.user.city_id,
                        'street'  : $scope.user.street  
                        }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response) {
                    var districts = response.data.Districts;
                    //console.log(districts);
                    for (var i = 0; i < districts.length; i++) {
                        var addresses = districts[i]['addresses'];
                        var sym = addresses.charAt(addresses.search($scope.user.street) + $scope.user.street.length);
                        //console.log(sym);
                        if (sym == ';' || sym == '') {
                            //нашли по ВСЕЙ улице! 
                            $scope.user.tvo_id = districts[i]['id'];
                            return $scope.user.tvo_id;
                        } else {
                            //ищем по номеру дома
                            addresses = addresses.substring(addresses.search($scope.user.street) + $scope.user.street.length + 2);
                            var semicolon = addresses.search(';');
                            var homes;
                            if (semicolon > -1) {
                                homes = addresses.substring(0, semicolon);
                            } else {
                                homes = addresses;
                            }
                            //console.log(homes);
                            var nums = homes.split(', ');
                            //console.log(nums);
                            for (var j = 0; j < nums.length; j++) {
                                if (nums[j].indexOf('–') > -1) {
                                    var dia = nums[j].split('–');
                                    //console.log(dia);
                                    if ($scope.user.home > parseInt(dia[0]) &&
                                        $scope.user.home < parseInt(dia[1])) {
                                        //нашли: номер дома в диапазоне!
                                        $scope.user.tvo_id = districts[i]['id'];
                                        return $scope.user.tvo_id;
                                    }
                                } else {
                                    if ($scope.user.home == nums[j]) {
                                        //нашли: номер дома указан явно!
                                        $scope.user.tvo_id = districts[i]['id'];
                                        return $scope.user.tvo_id;
                                    }
                                }
                            }
                        }
                    }
                    //адрес не значится нигде
                    return $scope.user.tvo_id = 0;
                });
            }
        };

    }]);
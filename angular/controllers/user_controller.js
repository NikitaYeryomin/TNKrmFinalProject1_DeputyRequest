app.controller('UserController', ['$scope', '$rootScope', '$http', '$location', '$state', '$stateParams',
    function($scope, $rootScope, $http, $location, $state, $stateParams) {
        
        $scope.user = {};
        $scope.deps = {};
        $scope.user.city_id = 1; //Пока город только 1
        
        $scope.place = null;
        $scope.autocompleteOptions = {
            componentRestrictions: { country: 'ua' },
            bounds: {},
            types: ['address']
        };
        
        $scope.autocomplete = new google.maps.places.Autocomplete();
        
        $scope.get_requests = function() {
            $http({
                method: 'GET',
                url: '/backend/dep_request'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.requests = response.data.Requests;
                    //console.log($scope.requests);
                }
            });
        };
        
        $scope.get_deputies = function() {
            //$scope.deputies = {};
            $http({
                method: 'GET',
                url: '/backend/deputy/unreg_deputies'
            }).then(function(response) {
                if (response.data.error == 0) {
                    $scope.deps = response.data.Deputies;
                    //console.log($scope.deputies);
                }
            });
        };
        
        $scope.get_requests();
        
        $scope.register = function() {
            $http({
                method: 'POST',
                url: '/backend/user/register',
                data: $.param({
                    'firstname' : $scope.user.name,
                    'secondname': $scope.user.patronymic,
                    'lastname'  : $scope.user.surname,
                    'email'     : $scope.user.email,
                    //'phone'     : $scope.user.phone,
                    'tvo_id'    : $scope.user.tvo_id,
                    'password'  : $scope.user.password,
                    'passconfirm':$scope.user.passconfirm,
                    'city_id'   : $scope.user.city_id,
                    'street'    : $scope.user.street,
                    'home'      : $scope.user.home,
                    'role'      : ($scope.user.iDep == true) ? 'deputy' : 'user'
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    //console.log('redirecting to mainpage...');
                    $rootScope.logged_in = true;
                    $rootScope.currentUser = response.data.currentUser;
                    var path;
                    if ($scope.user.iDep) {
                        path = '/office';    
                    } else {
                        path = '/user';
                    }
                    if ($rootScope.returnUrl) {
                        path = $rootScope.returnUrl;
                        $rootScope.returnUrl = null;
                    }
                    $location.path(path);
                } else {
                    $rootScope.messages = response.data.messages;
                    //console.log($rootScope.messages);
                    $rootScope.returnUrl = 'register';
                    $location.path('/error');
                }
            });
        };
        
        $scope.deputy_reg = function(){
            $http({
                method: 'POST',
                url: '/backend/user/register_deputy',
                data: $.param({
                    'depid':    $scope.deps.id,
                    'email':    $scope.user.email,
                    'city_id':  $scope.user.city_id,
                    'password': $scope.user.password,
                    'passconfirm': $scope.user.password
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                if (response.data.error == 0) {
                    //console.log(response.data);
                    $rootScope.logged_in = true;
                    $rootScope.currentUser = response.data.currentUser;
                    $location.path('/office');
                } else {
                    $rootScope.messages = response.data.messages;
                    $rootScope.returnUrl = 'register';
                    $location.path('/error');
                }
            });
        };
        
        /******************************************************************************/
        /*********************** заполнение данных пользователя ***********************/
        /******************************************************************************/
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
                    url: '/backend/user/get/' + $rootScope.currentUser.id
                }).then(function(response){
                    if (response.data.error == 0) {
                        $scope.user = response.data.User;
                        $scope.district = response.data.District;
                        $scope.deputies = response.data.Deputy;
                        $scope.eplace = response.data.Place;
                    }
                });
            }
        };
        
        $scope.init();
        
        /******************************************************************************/
        /*************** вычисление избирательного участка по адресу ******************/
        /******************************************************************************/
        $scope.detect_tvo = function() {
            //console.log($scope.user.city_id);
            $scope.user.tvo_id = -1;
            if ($scope.user.city_id && 
                $scope.user.street && 
                $scope.user.home) {
                var street = $scope.user.street; 
                if (street.indexOf('вулиця') > 0) {
                    street = street.substring(0, street.indexOf('вулиця') - 1);
                    street = 'вул. ' + street;
                } else {
                    street = street.replace('вулиця', 'вул.');
                }
                street = street.replace('улица', 'вул.');
                street = street.replace('проспект', 'просп.');
                street = street.replace('провулок', 'пров.');
                street = street.replace('переулок', 'пров.');
                street = street.replace('бульвар', 'бульв.');
                //street = street.replace('. ', '.');
                $scope.user.street = street;
                $http({
                    method: 'POST',
                    url: '/backend/districts/get_tvo',
                    data: $.param({
                        'city_id' : $scope.user.city_id,
                        'street'  : $scope.user.street  
                        }),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response) {
                    if (response.data.error == 0) {
                        var districts = response.data.Districts;
                        for (var i = 0; i < districts.length; i++) {
                            var addresses = districts[i]['addresses'];
                            var sym = addresses.charAt(addresses.search($scope.user.street) + $scope.user.street.length);
                            if (sym == ',' || sym == '') {
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
                                var nums = homes.split(', ');
                                //console.log(nums);
                                for (var j = 0; j < nums.length; j++) {
                                    if (nums[j].indexOf('–') > -1) {
                                        var dia = nums[j].split('–');
                                        if ($scope.user.home >= parseInt(dia[0]) &&
                                            $scope.user.home <= parseInt(dia[1])) {
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
                        return $scope.user.tvo_id = 0;
                    } else {
                        return $scope.user.tvo_id = 0;
                    }
                });
            }
        };
        
        $scope.geolocate = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var geolocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    var circle = new google.maps.Circle({
                        center: geolocation,
                        radius: position.coords.accuracy
                    });
                    $scope.autocomplete.setBounds(circle.getBounds());
                    $scope.autocompleteOptions.bounds = $scope.autocomplete.bounds;
                });
            }
        };
        
        $scope.$watch('user.geo', function() {
            if ($scope.user.geo) {
                var addr = $scope.user.geo.address_components;
                //console.log(addr);
                var street;
                if (addr.length >= 6) {
                    $scope.user.home = addr[0].long_name;
                    street = addr[1].long_name;
                } else {
                    if (addr.length == 5) {
                        street = addr[0].long_name;
                    }
                }
                $scope.user.street = street;    
            }
        });
        
        $scope.$watch('deps.id', function() {
            var i = 0;
            while ($scope.deps[i].id != $scope.deps.id) {
                i++;
            }
            $scope.user.surname = $scope.deps[i].surname;
            $scope.user.name = $scope.deps[i].name;
            $scope.user.patronymic = $scope.deps[i].patronymic;
        });
        
    }])
    
.directive('convertToNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(val) {
                return val != null ? parseInt(val, 10) : null;
            });
            ngModel.$formatters.push(function(val) {
                return val != null ? '' + val : null;
            });
        }
    };
});

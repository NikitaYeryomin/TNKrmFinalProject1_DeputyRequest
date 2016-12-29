app.controller('UsersController', ['$scope', '$http', '$location', '$state', 'Page', '$stateParams',
    function($scope, $http, $location, $state, Page, $stateParams) {

        if ($state.current.data != undefined) {
            Page.setTitle($state.current.data.title);

        }

    }]);
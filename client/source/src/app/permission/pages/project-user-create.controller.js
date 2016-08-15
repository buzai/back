(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectUserCreateController',ProjectUserCreateController);

    /* @ngInject */
    function ProjectUserCreateController($state, User) {
        // init
        var vm = this;
        vm.userCreateClick = function userCreateClick() {
            User.create({ email:vm.email, phone:vm.phone, username:vm.name, address:vm.address, password:"888888" }, function(res){
                console.log(res);
                $state.go('triangular.project-user');
            });
        }

        
    }
})();

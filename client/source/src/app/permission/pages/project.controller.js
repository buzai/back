(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectController', ProjectController);

    /* @ngInject */
    function ProjectController($state, User) {
        var vm = this;
        var userId = User.getCurrentId();
        // User.projectPermissions({id:userId}, function(resp){
        //     vm.projectPermissions = resp;
        // });
        
        // User.projectList({id:userId}, function(resp){
        //     vm.projectList = resp;
        // });

        ////////////////

        vm.userClick=userClick;
        function userClick(){
            $state.go('triangular.project-user');
        }

        // init

        
    }
})();

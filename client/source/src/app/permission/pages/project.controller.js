(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectController', ProjectController);

    /* @ngInject */
    function ProjectController($state, User) {
        var vm = this;

        vm.userClick=userClick;
        function userClick(){
            $state.go('triangular.project-user');
        }

        // init

        
    }
})();

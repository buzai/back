(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectUserModifyController', ProjectUserModifyController);

    /* @ngInject */
    function ProjectUserModifyController($state, User) {
        

        // init
        var vm=this;
        vm.userModifySaveClick=userModifySaveClick;
        function userModifySaveClick(){
            $state.go('triangular.project-user');
        }

        
    }
})();
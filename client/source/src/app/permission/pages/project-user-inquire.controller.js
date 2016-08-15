(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectUserInquireController', ProjectUserInquireController);

    /* @ngInject */
    function ProjectUserInquireController($state, User, $stateParams) {
        

        // init

         var vm=this;

         console.log($stateParams.obj.user.email)
         vm.user = $stateParams.obj.user
        vm.CreateUserClick=CreateUserClick;
        function CreateUserClick(){
            $state.go('triangular.project-user-create');
        }
    }
})();
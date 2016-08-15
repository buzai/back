(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectDetailController', ProjectDetailController);

    /* @ngInject */
    function ProjectDetailController($state, $stateParams, Project) {
        var vm = this;
        var prjId = $stateParams.id;

        // Project.findById({id:prjId}, function(resp){
        //     vm.project = resp;
        // });
        
        ////////////////

        

        // init

        
    }
})();

(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('AccountDetailController', AccountDetailController);

    /* @ngInject */
    function AccountDetailController($state, Account, $stateParams) {
        var vm = this;
        var acctId = $stateParams.id;

        Account.findById({id:acctId}, function(resp){
            vm.account = resp;
        });
        
        Account.projects({id:acctId}, function(resp){
            vm.projectList = resp;
        });

        ////////////////

        

        // init

        
    }
})();

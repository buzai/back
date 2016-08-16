(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('AccountController', AccountController);

    /* @ngInject */
    function AccountController($state, User) {
        var vm = this;
        var userId = User.getCurrentId();
        User.getAccounts({id:userId}, function(resp){
            vm.accountList = resp;
        });
        
        ////////////////

        

        // init

        
    }
})();

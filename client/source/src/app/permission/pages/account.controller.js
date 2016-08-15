(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('AccountController', AccountController);

    /* @ngInject */
    function AccountController($state, User, Address) {
        var vm = this;
        var userId = User.getCurrentId();
        // User.getAccounts({id:userId}, function(resp){
        //     vm.accountList = resp;
        // });

        function test() {
          console.log('test');
        }
        // { "v":"564645@qq.com"}

        Address.find(function(isins){
            console.log(isins);
        })
        ////////////////



        // init


    }
})();

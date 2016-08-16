(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('JianyiUserVerifiedController', JianyiUserVerifiedController);

    /* @ngInject */
    function JianyiUserVerifiedController($state, User) {
        var vm = this;

        function getUsers() {
            User.findNotVerfiedUsers(function(resp){
                console.log(resp);
                vm.userList = resp;
            });
        }
            
        // {
        //     "username": "lixue",
        //     "email": "123456@qq.com",
        //     "emailVerified": false,
        //     "id": "57b329fe20b5a029ea263574"
        // }
        
        getUsers()

        vm.Verified = function(kuser){
            User.ensureUser({id:kuser.id},function(res){
                
                getUsers();
            });
        }
        ////////////////

        

        // init

        
    }
})();

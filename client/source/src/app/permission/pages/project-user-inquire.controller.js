(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectUserInquireController', ProjectUserInquireController);

    /* @ngInject */
    function ProjectUserInquireController($state, User, $stateParams, $mdDialog) {
        
        // {
        //   "_id": "57b2b58580db1a09f5ffc812",
        //   "username": "陈浩",
        //   "password": "$2a$10$sq4MhlBy/56yXdn3ehNiouxKi.PEEPRB6OIZsQYlzdgdjROiINiPi",
        //   "email": "12345@qq.com",
        //   "emailVerified": false
        // }

        // init
        var vm=this;

        vm.user = $stateParams.obj.user;
        console.log(vm.user);

        vm.userDeleteClick = userDeleteClick;
        var newDialog = {
            title: 'Are you sure?',
            content: 'Are you sure you have deleted?',
            ok: 'Agree',
            cancel: 'Disagree'
        };
        function userDeleteClick($event) {
            $mdDialog.show(
                $mdDialog.confirm()
                .title(newDialog.title)
                .textContent(newDialog.content)
                .ok(newDialog.ok)
                .cancel(newDialog.cancel)
                .targetEvent($event)
            );
        }

        vm.userSaveClick=userSaveClick;
        function userSaveClick(){
            vm.user = vm.newuser;
        }
  
        
        vm.userCreateClick=userCreateClick;
        function userCreateClick(){
            $state.go('triangular.project-user-create');
        }
        // var vm.user = $stateParams.obj.user
        // vm.btnModify = "修改"


        vm.showdata = true;
        vm.showinput = false;
        vm.userModifyClick=userModifyClick;
        function userModifyClick(){
            vm.newuser = vm.user;
            vm.showdata = !vm.showdata;
            vm.showinput = !vm.showinput;
        }
        
    }
})();
(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectUserCreateController',ProjectUserCreateController);

    /* @ngInject */
    function ProjectUserCreateController($state, User, Org) {
        // init

        var vm=this;
        vm.userClick=userClick;
        function userClick(){

        User.create({email:vm.newuser.email,
                password:vm.newuser.password,
                name:vm.newuser.name,
                address:vm.newuser.address,
                phone:vm.newuser.phone
            }, function (user) {
                console.log(user);
            })

        }
        // Org.createOrg(
        //   {
        //  type: "Business",
        //  name: "jiangong",
        //  address: "beijing",
        //  verfyied: true,
        //  users:[       { "id":"57a00fd422f0ce581b8e9baf" }]
        //  },
        //  function  (argument) {
        //      console.log(argument);
        //  }
        // );

        vm.userCancelClick=userCancelClick;
        function userCancelClick(){
            $state.go('triangular.project-user');
        }
    }
})();

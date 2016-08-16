(function () {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectUserController', ProjectUserController);

    /* @ngInject */
    function ProjectUserController($state, Org, User, $mdDialog, verifyDelete) {

        // init
        var vm = this;
        Org.getOrgUsersById({ 'id': '57b2b5e498c3dff50936e413' }, function (result) {
            console.log(result)
            vm.users = result;
        })

        vm.showdata = true;
        vm.userInquireClick = userInquireClick;
        function userInquireClick() {

            Org.findUserByEmail({ 'email': vm.userinput.email }, function (kuser) {
                console.log(vm.userinput.email)
                console.log(kuser)
                $state.go('triangular.project-user-inquire', { obj: { user: kuser } });
            })

        }

        vm.delete = function (user) {
            verifyDelete(user).then(function () {
                var index = vm.users.indexOf(user);
                vm.users.splice(index, 1);
            });
        }

        vm.userCreateClick = userCreateClick;
        function userCreateClick() {
            $state.go('triangular.project-user-create');
        }

    }
})();



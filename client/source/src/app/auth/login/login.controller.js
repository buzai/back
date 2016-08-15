(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state, User, triSettings) {
        var vm = this;
        vm.loginClick = loginClick;
        vm.socialLogins = [{
            icon: 'fa fa-twitter',
            color: '#5bc0de',
            url: '#'
        },{
            icon: 'fa fa-facebook',
            color: '#337ab7',
            url: '#'
        },{
            icon: 'fa fa-google-plus',
            color: '#e05d6f',
            url: '#'
        },{
            icon: 'fa fa-linkedin',
            color: '#337ab7',
            url: '#'
        }];
        vm.triSettings = triSettings;
        // create blank user variable for login form
        vm.user = {
            email: '',
            password: ''
        };
        vm.loginFail = false;
        ////////////////
console.log('login some test');
        function loginClick() {
            console.log('login some ');
            console.log(vm.user);
            // console.log(User);
            User.login(vm.user, function(res){
                console.log('log ok', res);
                //$state.go('triangular.dashboard-analytics');
                $state.go('triangular.permission');
            }, function(res){
                console.log('log failed', res);
                vm.loginFail = true;
            });
            
        }
    }
})();

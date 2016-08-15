(function() {
    'use strict';

    angular
        .module('app.auth')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('auth', {
            abstract: true,
            views: {
                'root': {
                    templateUrl: 'app/auth/layouts/auth.tmpl.html'
                }
            },
            data: {
                permissions: {
                    only: ['viewAuthentication']
                }
            }
        })
        .state('auth.login', {
            url: '/login',
            templateUrl: 'app/auth/login/login.tmpl.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('auth.signup', {
            url: '/signup',
            templateUrl: 'app/auth/signup/signup.tmpl.html',
            controller: 'SignupController',
            controllerAs: 'vm'
        })
        .state('auth.lock', {
            url: '/lock',
            templateUrl: 'app/auth/lock/lock.tmpl.html',
            controller: 'LockController',
            controllerAs: 'vm'
        })
        .state('auth.forgot', {
            url: '/forgot',
            templateUrl: 'app/auth/forgot/forgot.tmpl.html',
            controller: 'ForgotController',
            controllerAs: 'vm'
        })
        .state('triangular.profile', {
            url: '/profile',
            templateUrl: 'app/auth/profile/profile.tmpl.html',
            controller: 'ProfileController',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'Authentication',
            icon: 'zmdi zmdi-account',
            type: 'dropdown',
            priority: 4.1,
            permission: 'viewAuthentication',
            children: [{
                name: 'Login',
                state: 'auth.login',
                type: 'link'
            },{
                name: 'Sign Up',
                state: 'auth.signup',
                type: 'link'
            },{
                name: 'Forgot Password',
                state: 'auth.forgot',
                type: 'link'
            },{
                name: 'Lock Page',
                state: 'auth.lock',
                type: 'link'
            },{
                name: 'Profile',
                state: 'triangular.profile',
                type: 'link'
            }]
        });
    }
})();

(function() {
    'use strict';

    angular
        .module('app.permission')
        .config(permissionConfig);

    /* @ngInject */
    function permissionConfig($stateProvider, triMenuProvider) {
        $stateProvider
        .state('triangular.permission', {
            url: '/permission',
            templateUrl: 'app/permission/pages/permission.tmpl.html',
            controller: 'PermissionController',
            controllerAs: 'vm',
            resolve: {
                users: ['UserService', function(UserService) {
                    return UserService.getUsers();
                }]
            },
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.permission-define', {
            url: '/permission/define',
            templateUrl: 'app/permission/pages/permission-define.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.permission-routes', {
            url: '/permission/routes',
            templateUrl: 'app/permission/pages/permission-routes.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.permission-views', {
            url: '/permission/views',
            templateUrl: 'app/permission/pages/permission-views.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.accounts', {
            url: '/permission/accounts',
            templateUrl: 'app/permission/pages/account.tmpl.html',
            controller: 'AccountController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.accounts-detail', {
            url: '/permission/accounts/:id',
            templateUrl: 'app/permission/pages/account-detail.tmpl.html',
            controller: 'AccountDetailController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.projects', {
            url: '/permission/projects',
            templateUrl: 'app/permission/pages/project.tmpl.html',
            controller: 'ProjectController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.project-detail', {
            url: '/permission/projects/:id',
            templateUrl: 'app/permission/pages/project-detail.tmpl.html',
            controller: 'ProjectDetailController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        <!--用户管理-->
        .state('triangular.project-user', {
            url: '/permission/projects-user',
            templateUrl: 'app/permission/pages/project-user.tmpl.html',
            controller: 'ProjectUserController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        <!--用户管理  查询-->
        .state('triangular.project-user-inquire', {
            url: '/permission/projects-user-inquire',
            templateUrl: 'app/permission/pages/project-user-inquire.tmpl.html',
            controller: 'ProjectUserInquireController',
            controllerAs: 'vm',
            params:{
                obj:null
            },
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        <!--用户管理  查询 新建-->
        .state('triangular.project-user-create', {
            url: '/permission/projects-user-create',
            templateUrl: 'app/permission/pages/project-user-create.tmpl.html',
            controller: 'ProjectUserCreateController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        <!--用户管理  查询 修改-->
        .state('triangular.project-user-modify', {
            url: '/permission/projects-user-modify',
            templateUrl: 'app/permission/pages/project-user-modify.tmpl.html',
            controller: 'ProjectUserModifyController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        <!--用户管理审核-->
        .state('triangular.jianyi-user-Verified', {
            url: '/jianyi/jianyi-user-Verified',
            templateUrl: 'app/permission/pages/jianyi-user-Verified.tmpl.html',
            controller: 'JianyiUserVerifiedController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        ;

        triMenuProvider.addMenu({
            name: 'IAM & Admin',
            icon: 'zmdi zmdi-lock',
            type: 'dropdown',
            priority: 4.1,
            children: [{
                name: 'Permissions',
                state: 'triangular.permission',
                type: 'link'
            },/*{
                name: 'Define Roles',
                state: 'triangular.permission-define',
                type: 'link'
            },{
                name: 'Routes',
                state: 'triangular.permission-routes',
                type: 'link'
            },{
                name: 'Views',
                state: 'triangular.permission-views',
                type: 'link'
            },*/{
                name: 'Accounts',
                state: 'triangular.accounts',
                type: 'link'
            },{
                name: 'Projects',
                state: 'triangular.projects',
                type: 'link'
            }]
        });

        triMenuProvider.addMenu({
            name: '建宜',
            icon: 'zmdi zmdi-lock',
            type: 'dropdown',
            priority: 4.1,
            children: [{
                name: '用户审核',
                state: 'triangular.jianyi-user-Verified',
                type: 'link'
            }]
        });
    }
})();

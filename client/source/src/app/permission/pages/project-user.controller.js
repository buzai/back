(function() {
    'use strict';

    angular
        .module('app.permission')
        .controller('ProjectUserController', ProjectUserController);

    /* @ngInject */
    function ProjectUserController($state, User, Org) {
       
        // var prjId = $stateParams.id;

        // Project.findById({id:prjId}, function(resp){
        //     vm.project = resp;
        // });
        
        ////////////////
        // function userClick(){
        //     console.log("test");
        // }
        var vm=this;


        // init
        var orgid = '57a066ae35ecc2d414c3081e';
        Org.getOrgUsersById({id:orgid},function(res){
            vm.userList = res;
        })

        vm.userClick=userClick;
        function userClick(){
            Org.findUserByEmail({email:vm.kemail},

                function(res){
                    $state.go('triangular.project-user-inquire',{ obj:{ user:res, orgId:orgid } });
                    // console.log(res);
                }
            )  
        }
        
    }
})();
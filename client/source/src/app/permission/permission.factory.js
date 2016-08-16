(function() {
    'use strict';

    angular
        .module('app.permission')
        .factory('verifyDelete', verifyDelete);

    /* @ngInject */
    function verifyDelete($mdDialog) {
        //Include a reference to the user object we're deleting
        return function(user) {
        
        //Call the confirm() function to configure the confirmation dialog
        var confirm = $mdDialog.confirm()
            .title('Confirm Your Choice')
            .content('Are you sure you want to delete ' + user.firstName + '?')
            .ariaLabel('Delete User')
            .ok('Delete User')
            .cancel('Cancel');
            return $mdDialog.show(confirm);
        }
    }
})();

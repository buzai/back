var async = require("async");
module.exports = function( app ){

  function initAdminRole( ) {

     app.models.Role.find({where:{name:'admin'}}, function(err, roles){
      if (err || roles.length != 1){
        app.models.Role.create({
          name: 'admin',
          ownerId: 0
        }, function(err, role) {
          if (err){
            console.log('Can not init admin role: ', err);
            return;
          }
          app.adminRole = role;
        });
      } else {
        app.adminRole = roles[0];
      }

    });
  }

  initAdminRole();

  // 这个方法是否可以独立出来
  function initOrguserRole(cb) {
       app.models.Role.find({where:{name:'Orguser'}}, function(err, roles){
        if (err || roles.length != 1){
          app.models.Role.create({
            name: 'Orguser',
            ownerId: 0
          }, function(err, role) {
            if (err){
              console.log('Can not init admin role: ', err);
              return;
            }

            app.OrguserRole = role;
            cb(null,role)
          });
        }
      else {
        app.OrguserRole = roles[0];
        cb(null,roles[0])
      }
      });
    }

  


  function initgeneralUserRole( cb ) {
   app.models.Role.find({where:{name:'generalUser'}}, function(err, roles){
      if (err || roles.length != 1){
        app.models.Role.create({
          name: 'generalUser',
          ownerId: 0
        }, function(err, role) {
          if (err){
            console.log('Can not init generalUser role: ', err);
            return;
          }
                      
          
          app.generalUserRole = role;
          cb(null,role);
        });
      } else {
        app.generalUserRole = roles[0];
        cb(null,roles[0]);
      }

    });
  }

  


  function initorgCreatRole( cb ) {

   app.models.Role.find({where:{name:'orgCreat'}}, function(err, roles){
      if (err || roles.length != 1){
        app.models.Role.create({
          name: 'orgCreat',
          ownerId: 0
        }, function(err, role) {
          if (err){
            console.log('Can not init orgCreat role: ', err);
            return;
          }
          
          app.orgCreatRole = role;
          cb(null,role);
        });
      } else {
        app.orgCreatRole = roles[0];
        cb(null,roles[0]);
      }

    });
  }


  function initorgGeneralUserRole( cb ) {

   app.models.Role.find({where:{name:'orgGeneralUser'}}, function(err, roles){
      if (err || roles.length != 1){
        app.models.Role.create({
          name: 'orgGeneralUser',
          ownerId: 0
        }, function(err, role) {
          if (err){
            console.log('Can not init orgGeneralUser role: ', err);
            return;
          }
          app.orgGeneralUserRole = role;
          cb(null,role);
        });
      } else {
        app.orgGeneralUserRole = roles[0];
        cb(null,roles[0]);
      }

    });
  }


  function initorgNewsManageUserRole( cb ) {

   app.models.Role.find({where:{name:'orgNewsManageUser'}}, function(err, roles){
      if (err || roles.length != 1){
        app.models.Role.create({
          name: 'orgNewsManageUser',
          ownerId: 0
        }, function(err, role) {
          if (err){
            console.log('Can not init orgNewsManageUser role: ', err);
            return;
          }
          app.orgNewsManageUserRole = role;
          cb(null,role);
        });
      } else {
        app.orgNewsManageUserRole = roles[0];
        cb(null,roles[0]);
      }

    });
  }


  function initorgProductsManageUserRole( cb ) {

   app.models.Role.find({where:{name:'orgProductsManageUser'}}, function(err, roles){
      if (err || roles.length != 1){
        app.models.Role.create({
          name: 'orgProductsManageUser',
          ownerId: 0
        }, function(err, role) {
          if (err){
            console.log('Can not init orgProductsManageUser role: ', err);
            return;
          }
          app.orgProductsManageUserRole = role;
          cb(null,role);
        });
      } else {
        app.orgProductsManageUserRole = roles[0];
        cb(null,roles[0]);
      }

    });
  }


  function initorgPersonManageUserRole( cb ) {

   app.models.Role.find({where:{name:'orgPersonManageUser'}}, function(err, roles){
      if (err || roles.length != 1){
        app.models.Role.create({
          name: 'orgPersonManageUser',
          ownerId: 0
        }, function(err, role) {
          if (err){
            console.log('Can not init orgPersonManageUser role: ', err);
            return;
          }
          app.orgPersonManageUserRole = role;
          cb(null,role);
        });
      } else {
        app.orgPersonManageUserRole = roles[0];
        cb(null,roles[0]);
      }

    });
  }






console.log(app.roleObject)


async.parallel([
    function(cb) { initOrguserRole(cb); },
    function(cb) { initgeneralUserRole(cb); },
    function(cb) { initorgGeneralUserRole(cb); },
    function(cb) { initorgNewsManageUserRole(cb); },
    function(cb) { initorgProductsManageUserRole(cb); },
    function(cb) { initorgPersonManageUserRole(cb); }
], function (err, results) {

      app.roleObject = {
        "generalUser": app.generalUserRole,
        "orgCreat": app.orgCreatRole,
        "orgGeneralUser": app.orgGeneralUserRole,
        "orgNewsManageUser": app.orgNewsManageUserRole,
        "orgProductsManageUser": app.orgProductsManageUserRole,
        "orgPersonManageUser": app.orgPersonManageUserRole
      };

});

// to grant a role to user, 
  grantRole = function (userId, roleName, cb) {
    var User = app.models.user;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    Role.find({ name: roleName }, function (err, role) {
      if (err || !role) {
        //trying to create a role
        Role.create({
          name: roleName
        }, function (err, role) {
          grant(role, userId, cb);
        });
      } else {
        grant(role, userId, cb);
      }
    });


    function grant(role, userId, callback) {
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function (err, principal) {
        return callback(err);
      });
    }
  };

};

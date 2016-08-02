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
  function initOrguserRole() {
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
          });
        }
      else {
        app.OrguserRole = roles[0];
      }
      });
    }

  initOrguserRole();


  function initgeneralUserRole( ) {
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
        });
      } else {
        app.generalUserRole = roles[0];
      }

    });
  }

  initgeneralUserRole();


  function initorgCreatRole( ) {

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
        });
      } else {
        app.orgCreatRole = roles[0];
      }

    });
  }

  initorgCreatRole();

  function initorgGeneralUserRole( ) {

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
        });
      } else {
        app.orgGeneralUserRole = roles[0];
      }

    });
  }

  initorgGeneralUserRole();

  function initorgNewsManageUserRole( ) {

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
        });
      } else {
        app.orgNewsManageUserRole = roles[0];
      }

    });
  }

  initorgNewsManageUserRole();

  function initorgProductsManageUserRole( ) {

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
        });
      } else {
        app.orgProductsManageUserRole = roles[0];
      }

    });
  }

  initorgProductsManageUserRole();

  function initorgPersonManageUserRole( ) {

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
        });
      } else {
        app.orgPersonManageUserRole = roles[0];
      }

    });
  }

  initorgPersonManageUserRole();


};

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

};

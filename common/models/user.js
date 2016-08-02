module.exports = function(user) {
  var User = user;
  User.getApp(function(err, app) {

    User.afterRemote(
      'create',
        function (ctx, kuser, next) {
            var RoleMapping = app.models.RoleMapping;
            app.generalUserRole.principals.create({
              principalType: RoleMapping.USER,
              principalId: kuser.id
            }, function(err, principal) {
              if (err) return next(err);
              next();
            });
        }
    );
  });

};

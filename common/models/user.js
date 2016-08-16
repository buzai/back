module.exports = function(user) {
  var User = user;


User.ensureUser = function(kid, cb) {
  console.log(kid)
  User.find( { where:{ id:kid } }, function (err, result) {
    if(err) cb(err);

        result[0].updateAttributes({emailVerified: true }, function(err,res){
              if(err) cb(err);
              cb(null,res);
          }
        )

  })

};
User.remoteMethod(
  'ensureUser', {
    accepts: { arg: 'id', type: 'string' },
    returns: { arg: 'flag', type: 'object', root: true },
    http: {  path: '/ensureUser', verb: 'get' }
  }
);


User.findNotVerfiedUsers = function(cb) {
  User.find( { where:{ emailVerified: false } }, function (err, result) {
    if(err) cb(err);
    cb(null, result);
  })

};
User.remoteMethod(
  'findNotVerfiedUsers', {
    returns: { arg: 'users', type: ['user'], root: true },
    http: {  path: '/findNotVerfiedUsers', verb: 'get' }
  }
);

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

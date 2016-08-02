var loopback = require('loopback');
var mongoose = require('mongoose');


module.exports = function (app, options) {
  console.log('start init db schema');
  var ds = app.datasources.mongodb;
  mongoose.Promise = global.Promise;
  mongoose.connect(ds.connector.settings.url, { server: {auto_reconnect: true} });

  mongoose.connection.on('connected', function () {
    console.log('mongoose connection is ok');
  });

  mongoose.connection.on('error', function (err) {
    console.log('mongoose connection is error' + err);
  });
  mongoose.connection.on('disconnected', function () {
    console.log('mongoose connection is disconnected');
  });

  var org = require("./org.js")(app, app.models.org);
  app.org = mongoose.model('org', org.schema);

  var user = require("./user.js")(app, app.models.user);
  app.user = mongoose.model('user', user.schema);
  
};

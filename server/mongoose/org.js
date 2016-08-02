var mongoose = require('mongoose');
var loopback = require('loopback');
var async = require('async');
var _ = require('lodash');

var obj;

module.exports = org;
function org(app, model) {
  if (!obj) {
    initModel(app, model);
  }
  return obj;
}

function initModel(app, model) {

// 生成schema
var schemaDefinition = {
  type:{ type: String },
  name:{ type: String },
  address:{ type: String },
  verfyied: { type: Boolean, default: false },
  users: [{ id: { type: mongoose.Schema.Types.ObjectId, ref: 'user'} }]
};

var schema = new mongoose.Schema(schemaDefinition, { collection:'org', timestamps: true});

// 生成接口需要的声明对象 merge方法！
var orgObj = _.merge({}, schemaDefinition, {});
var apiObject = 'orgObj';
var ds = app.datasources.transient;
ds.define(apiObject, orgObj);

// 组装返回的对象
obj = {
  schemaDefinition: schemaDefinition,
  schema: schema,
  apiObject: apiObject
};

var OrgloopModel = model;


// 开始创建接口
// Org是 loopback的模型，用来暴露出接口

/**
 * 创建企业
 * data :
 *   {
     "type": "Business",or"government"
     "name": "jiangong",
     "address": "beijing",
     "verfyied": true,
     "users": [
       { "id":"57a0170f5bf90d9c14cec5e2" }
     ]
   }
 * @param  {[type]}   data [description]
 * @param  {Function} cb   [description]
 * @return {[type]}   orgobject     [description]
 */
OrgloopModel.createOrg = function(data, cb) {

  // data里面的名字在new 的时候也要一样否则存不进去
  (new app.org(data))
  .save(function (err, instance) {
      if (err) {
        cb(err);
      }

      app.roleMapping.findByPrincipalId(data.users[0].id, function (err, maps) {
        app.role.findByName("orgCreat", function (err, role) {
          console.log(role[0].id);
          
        });
      });

      cb(null, instance);
  });

};

OrgloopModel.remoteMethod(
  'createOrg', {
    accepts: { arg: 'org', type: 'orgObj', http: { source:'body' } },
    returns: { arg: 'org', type: 'orgObj', root: true },
    http: {  path: '/createOrg', verb: 'post' }
  }
);

}

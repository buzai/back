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

var Org = model;


//下面开始创建接口
// Org

}

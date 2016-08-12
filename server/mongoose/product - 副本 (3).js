var mongoose = require("mongoose");
var loopback= require('loopback');
var _=require('lodash');

var obj;

module.exports= product;
function product(app,model){
	if(!obj){
		initModel(app,model);
	}
	return obj;
}

function initModel(app,model){
	var schemaDefinition={
		name:{type:String},
		price:{type:Number,  required: true,	default: 1},
		orgID: {  type: Number, required: true},
    userID: {type: Number,required: true},
		description: {  type: String },
		create_time: {  type: Date, default: Date.now },
	  model_number: {type: String},
	  modify_time: {type: Date, default: Date.now,  required: true},
		modify_admin_id: {  type: Number,required: true},
		address: {type: String,default: "beijing",desc: "建材生产地址"},
		product_type_id: {    type: Number,  required: true  },
		is_alive: {  type: Boolean,  default: false  },
	  isPass: {    type: Boolean,default: false    },
	  brand_id: {    type: Number  },
		category_id: {type: Number  },
	  visited: {  type: Number,default: 0  },
		start_time: {  type: Date},
		end_time: {  type: Date},
		file_path: {  type: String}
	};

	var schema = new mongoose.Schema(schemaDefinition,{collection:'product',timestamps:true});

	var productObj =_.merge({},schemaDefinition,{});
	var apiObject='productObj';

	var ds =app.datasources.transient;
	ds.define(apiObject,productObj);


	obj = {
	schemaDefinition:schemaDefinition,
	schema:schema,
	apiObject:apiObject
	};

	//////////////////
	var product=model;

	//product.beforeRemote('getProducts',auth.tokenAccount);
	product.getProducts=function(filter,cb){
		app.product.find(filter,function(err,instances){
			if(err) { cb(err); }
			cb(null,instances);
		});

	};

	product.remoteMethod(
		'getProducts',{
			accepts:[{arg:'filter',type:'object'}],
			returns:{arg:'product',type:['productObj'],root:true},
			http:{path:'/',verb:'get'}
		}
	);
//-----------------------------------------------------------
	product.createProducts=function(data,cb){
		// app.product.save(filter,function(err,instances){
		// 	cb(err,instances);
		// });

		(new app.product(data))
		.save(function(err,inst){
			if(err){ return cb(err);}
			cb(null,inst);
		});

	};
	product.remoteMethod(
		'createProducts',{
			accepts:[{arg:'data',type:'productObj',http:{source:'body'}}],
			returns:{arg:'product',type:'productObj',root:true},
			http:{path:'/',verb:'post'}
		}
	);
//-----------------------------------------------------------

//-----------------------------------------------------------


//-----------------------------------------------------------
// 商品列表
product.listProduct = function(cb) {
	app.product.find({}, function(err,instances){
		if(err) { cb(err); }
		cb(null,instances);
	});
};
product.remoteMethod('listProduct', {
	returns: {arg: 'product', type: 'array',root:true},
	http: {path:'/list-product', verb: 'get'}
});
//-----------------------------------------------------------
//用户旗下的商品
product.productByUserID = function(id,cb) {
	app.product.find({ownerId:id}, function(err,instances){
		if(err) { cb(err); }
		cb(null,instances);
	});
};
product.remoteMethod('productByUserID', {
	accepts: [{arg: 'id',type: 'string',required: true}],
	returns: {arg: 'product', type: 'array',root:true},
	http: {path:'/productByUserID', verb: 'get'}
});


//-----------------------------------------------------------
//价格区间查询商品
product.productByPrice = function(mixPrice,maxPrice,cb) {
	app.product.find({price:{$gte:mixPrice,$lte:maxPrice}}, function(err,instances){
		if(err) { cb(err); }
		cb(null,instances);
	});
};
product.remoteMethod('productByPrice', {
	accepts: [{arg: 'mixPrice',type: 'number',required: true},{arg: 'maxPrice', type: 'number',required: true}],
	returns: {arg: 'instances', type: 'array',root:true},
	http: {path:'/productByPrice', verb: 'get'}
});
//-----------------------------------------------------------
//日期区间查询商品
product.productByDate = function(mixDate,maxDate,cb) {
	app.product.find({created:{$gte:mixDate,$lte:maxDate}}, function(err,instances){
		if(err) { cb(err); }
		cb(null,instances);
	});
};
product.remoteMethod('productByDate', {
	accepts: [{arg: 'mixDate',type: 'date',required: true},{arg: 'maxDate', type: 'date',required: true}],
	returns: {arg: 'product', type: 'array',root:true},
	http: {path:'/productByDate', verb: 'get'}
});
//-----------------------------------------------------------
//通过商品名称查询商品
product.productByName = function(proname,cb) {
	app.product.find({name:proname},function(err,instances){
		if(err) { cb(err); }
		cb(null,instances);
	});
};
product.remoteMethod('productByName', {
	accepts: [{arg: 'proname',type: 'string',required: true}],
	returns: {arg: 'instances', type: 'array',root:true},
	http: {path:'/productByName', verb: 'get'}
});


//-----------------------------------------------------------
//通过商品名称模糊查询商品
product.fuzzySearchByName = function(proName,cb) {
	app.product.find({ name: { $regex:proName}},function(err,instances){
		if(err) { return cb(err); }
		cb(null,instances);
	});
};
product.remoteMethod('fuzzySearchByName', {
	accepts: [{arg: 'proName',type: 'string',required: true}],
	returns: {arg: 'product', type: 'array',root:true},
	http: {path:'/fuzzySearchByName', verb: 'get'}
});
//-----------------------------------------------------------
//审核商品 未完成
product.productStatus = function(proID,cb) {
	app.product.update({id:proID},{isPass:true}, function (err, results) {
		if(err){
			cb(err,false);
		}
		cb(null,true);
});
};
product.remoteMethod('productStatus', {
	accepts: [{arg: 'proID',type: 'number',required: true}],
	returns: {arg: 'results', type: 'boolean',root:true},
	http: {path:'/productStatus', verb: 'get'}
});






};

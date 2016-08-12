var mongoose = require("mongoose");
var loopback= require('loopback');
var _=require('lodash');

var obj;

module.exports= productPicture;
function productPicture(app,model){
	if(!obj){
		initModel(app,model);
	}
	return obj;
}

function initModel(app,model){
	var schemaDefinition={
		product_id: {  type: mongoose.Schema.Types.ObjectId, required: true  },
	  is_default: {    type: Boolean,default: false },
		picture_url: {  type: String, required: true}
	};

	var schema = new mongoose.Schema(schemaDefinition,{collection:'productPicture',timestamps:true});

	var productPictureObj =_.merge({},schemaDefinition,{});
	var apiObject='productPictureObj';

	var ds =app.datasources.transient;
	ds.define(apiObject,productPictureObj);


	obj = {
	schemaDefinition:schemaDefinition,
	schema:schema,
	apiObject:apiObject
	};

	//////////////////
	var productPicture=model;

//-----------------------------------------------------------
//商品图片列表
	productPicture.listPictures=function(filter,cb){
		app.productPicture.find(filter,function(err,instances){
			if(err) { cb(err); }
			cb(null,instances);
		});
	};
	productPicture.remoteMethod(
		'listPictures',{
			accepts:[{arg:'filter',type:'object'}],
			returns:{arg:'productPicture',type:['productPictureObj'],root:true},
			http:{path:'/',verb:'get'}
		}
	);
//-----------------------------------------------------------
	productPicture.picture=function(data,cb){
		(new app.productPicture(data))
		.save(function(err,inst){
			if(err){ return cb(err);}
			cb(null,inst);
		});
	};
	productPicture.remoteMethod(
		'picture',{
			accepts:[{arg:'data',type:'productPictureObj',http:{source:'body'}}],
			returns:{arg:'productPicture',type:'productPictureObj',root:true},
			http:{path:'/',verb:'post'}
		}
	);
//-----------------------------------------------------------

//-----------------------------------------------------------


//-----------------------------------------------------------
// 商品列表
productPicture.listProducts = function(cb) {
	app.productPicture.find({}, function(err,instances){
		if(err) { cb(err); }
		cb(null,instances);
	});
};
productPicture.remoteMethod('listProducts', {
	returns: {arg: 'productPicture', type: 'array',root:true},
	http: {path:'/listPictures', verb: 'get'}
});
//-----------------------------------------------------------
//商品下的所有图片
productPicture.pictureByProductID = function(id,cb) {
	app.productPicture.find({product_id:id}, function(err,instances){
		if(err) { cb(err); }
		cb(null,instances);
	});
};
productPicture.remoteMethod('pictureByProductID', {
	accepts: [{arg: 'id',type: 'string',required: true}],
	returns: {arg: 'productPicture', type: 'array',root:true},
	http: {path:'/pictureByProductID', verb: 'get'}
});


//-----------------------------------------------------------


};

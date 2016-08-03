module.exports = function(Product) {


Product.createdProduct = function(data, cb) {
	Product.create({name:data.name, userid:data.userid,orgid:data.orgid}, function (err, ins) {
		console.log(ins);
		cb(null,ins);
	})
};
Product.remoteMethod(
  'createdProduct', {
    accepts: { arg: 'org', type: 'object', http: { source:'body' } },
    returns: { arg: 'org', type: 'object', root: true },
    http: {  path: '/createdProduct', verb: 'post' }
  }
);

// {"userid":"57a07d6261ed14b03ee96217","orgid":"57a07dbc61ed14b03ee96219","name":"cest"}
//   "__v": 0,
//   "updatedAt": "2016-08-02T11:02:20.672Z",
//   "createdAt": "2016-08-02T11:02:20.672Z",
//   "type": "Business",
//   "name": "jiangong",
//   "address": "beijing",
//   "_id": "57a07dbc61ed14b03ee96219",
//   "users": [
//     {
//       "id": "57a07d6261ed14b03ee96217",
//       "_id": "57a07dbc61ed14b03ee9621a"
//     }
//   ],
//   "verfyied": true
// }

//-----------------------------------------------------------
// 商品列表
Product.listProduct = function(cb) {
    Product.find({}, cb);
  };
Product.remoteMethod('listProduct', {
    returns: {arg: 'product', type: 'array'},
    http: {path:'/list-product', verb: 'get'}
  });
//-----------------------------------------------------------
//用户旗下的商品
Product.findProductByUserID = function(id,cb) {
    Product.find({where:{ownerId:id}}, cb);
  };
Product.remoteMethod('findProductByUserID', {
	accepts: [{arg: 'id',type: 'string',required: true}],
    returns: {arg: 'product', type: 'array'},
    http: {path:'/findProductByUserID', verb: 'get'}
  });

//-----------------------------------------------------------
//价格区间查询商品
	Product.findProductByPrice = function(mixPrice,maxPrice,cb) {
	    Product.find({where:{price:{gte:mixPrice,lte:maxPrice}}}, cb);
	  };
	Product.remoteMethod('findProductByPrice', {
		accepts: [{arg: 'mixPrice',type: 'number',required: true},{arg: 'maxPrice', type: 'number',required: true}],
	    returns: {arg: 'product', type: 'array'},
	    http: {path:'/findProductByPrice', verb: 'get'}
	  });
//-----------------------------------------------------------
//日期区间查询商品
		Product.findProductByDate = function(mixDate,maxDate,cb) {
				Product.find({where:{created:{gte:mixDate,lte:maxDate}}}, cb);
			};
		Product.remoteMethod('findProductByDate', {
			accepts: [{arg: 'mixDate',type: 'date',required: true},{arg: 'maxDate', type: 'date',required: true}],
				returns: {arg: 'product', type: 'array'},
				http: {path:'/findProductByDate', verb: 'get'}
			});
//-----------------------------------------------------------
//通过商品名称查询商品
	Product.findByName = function(proName,cb) {
			Product.find({where:{name:  proName}}, cb);
	};
  Product.remoteMethod('findByName', {
			accepts: [{arg: 'proName',type: 'string',required: true}],
			returns: {arg: 'product', type: 'array'},
			http: {path:'/findByName', verb: 'get'}
	});

//-----------------------------------------------------------
//通过商品名称模糊查询商品
	Product.fuzzySearchByName = function(proName,cb) {
			Product.find({where:{name: {like: proName}}}, cb);
	};
	Product.remoteMethod('fuzzySearchByName', {
			accepts: [{arg: 'proName',type: 'string',required: true}],
			returns: {arg: 'product', type: 'array'},
			http: {path:'/fuzzySearchByName', verb: 'get'}
	});

};

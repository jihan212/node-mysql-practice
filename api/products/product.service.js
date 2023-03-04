const pool = require('../../config/db.js');

module.exports = {
	create: (data, callback) => {
		pool.query(
			`insert into product(id,product_name,price,qty,category)
                values(?,?,?,?,?)`,
			[data.id, data.product_name, data.price, data.qty, data.category],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	getProducts: (callback) => {
		pool.query(
			`select id,product_name,price,qty,category from product`,
			[],
			(error, result) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
	getProductsByCategory: (category, callback) => {
		pool.query(
			`select id,product_name,price,qty,category from product where category = ?`,
			[category],
			(error, result, fields) => {
				if (error) {
					return callback(error);
				}
				return callback(null, result);
			}
		);
	},
};

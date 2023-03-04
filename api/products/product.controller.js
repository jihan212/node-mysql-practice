const {
	create,
	getProducts,
	getProductsByCategory,
} = require('./product.service.js');

module.exports = {
	createProduct: (req, res) => {
		const body = req.body;

		create(body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					success: 0,
					message: 'Database connection error',
				});
			}
			return res.status(200).json({
				success: 1,
				data: results,
			});
		});
	},
	getProducts: (req, res) => {
		getProducts((err, results) => {
			if (err) {
				console.log(err);
				return;
			}
			return res.json({
				success: 1,
				data: results,
			});
		});
	},
	getProductsByCategory: (req, res) => {
		const category = req.params.category;
		getProductsByCategory(category, (err, results) => {
			if (err) {
				console.log(err);
				return;
			}
			if (!results) {
				return res.json({
					success: 0,
					message: 'Record not found',
				});
			}
			return res.json({
				success: 1,
				data: results,
			});
		});
	},
};

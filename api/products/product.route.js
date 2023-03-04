const {
	createProduct,
	getProducts,
	getProductsByCategory,
} = require('./product.controller.js');
const router = require('express').Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);

module.exports = router;

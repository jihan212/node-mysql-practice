require('dotenv').config();
const express = require('express');
const app = express();
const productRouter = require('./api/products/product.route.js');

app.use(express.json());

app.use('/api/products', productRouter);

app.listen(process.env.APP_PORT, () => {
	console.log('Server up & running on PORT:', process.env.APP_PORT);
});

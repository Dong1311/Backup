const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/stored', productController.show);
router.get('/create', productController.create);
router.post('/add-product', productController.addProduct);
router.get('/:product_id/edit', productController.edit);
router.put('/:product_id', productController.updateProduct);

module.exports = router;

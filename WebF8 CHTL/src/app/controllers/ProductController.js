const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');


class ProductController {
    // [GET] /course/:slug
    show(req, res, next) {
        Product.find({ })
            .then((products) => {
                res.render('products/stored-products', {
                    products: multipleMongooseToObject(products),
                });
            })
            .catch(next);
    }

    // [GET] /product/create
    create(req, res, next) {
        res.render('products/create');
    }

    addProduct(req, res, next) {
        //req.body.image = `https://i.ytimg.com/vi/${req.body.videoID}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAc2AQkTLMw6nodO1GDkTsnJhzQJA`;
        const product = new Product(req.body);
        //const product = new Product();
        product
            .save()
            .then(() => res.redirect('/products/stored'))
            .catch(next);
    }

    // [GET] /product/:id/edit
    edit(req, res, next) {
        Product.findOne({product_id: req.params.product_id})
            .then((product) => {
                res.render('products/edit', {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);
    }

    //[PUT] /product/:product_id
    updateProduct(req, res, next) {
        Product.updateOne({ product_id: req.params.product_id },req.body)
           .then(() => res.redirect('/products/stored'))
           .catch(next);
    }
}

module.exports = new ProductController();

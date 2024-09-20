const { multipleMongooseToObject } = require('../../util/mongoose');
const Product = require('../models/Product');

class HomeController {
    index(req, res, next) {
        Product.find({})
            .then((products) => {
                res.render('home', {
                    products: multipleMongooseToObject(products),
                });
            })

            .catch(next);
    }

    
}
module.exports = new HomeController();


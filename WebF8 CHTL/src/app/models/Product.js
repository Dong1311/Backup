const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductScheme = new Schema(
    {
        product_id: { type: Number }, 
        name: { type: String, maxLength: 255, required: true },
        manufacture_date: { type: String },
        expiration_date: { type: String },
        quantity: { type: String, required: true },
        unit: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        //_id: false,
        timestamps: true,
    },
);

//Custom query helpers
ProductScheme.query.sortable = function ( req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc'
        });
    }
    return this; 
}

mongoose.plugin(slug);

ProductScheme.plugin(AutoIncrement, { inc_field: 'product_id' });

ProductScheme.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('Product', ProductScheme);

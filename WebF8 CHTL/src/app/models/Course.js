const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CourseScheme = new Schema(
    {
        _id: {type: Number,},
        name: { type: String, maxLength: 255, required: true },
        description: { type: String },
        image: { type: String },
        videoID: { type: String, require: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        _id: false,
        timestamps: true,
    },
);


//Custom query helpers
CourseScheme.query.sortable = function ( req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc'
        });
    }
    return this; 
}

mongoose.plugin(slug);

CourseScheme.plugin(AutoIncrement)
CourseScheme.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseScheme);

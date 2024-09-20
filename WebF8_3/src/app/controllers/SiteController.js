const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    // async index(req, res, next) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (err) {
    //         next(err)
    //     }

    //     // res.render('home');
    // }
    index(req, res, next) {
        Course.find({})
            // .then(courses => res.json (courses))
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })

            .catch(next);
    }

    //[GET] / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

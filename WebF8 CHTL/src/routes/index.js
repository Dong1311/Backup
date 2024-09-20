const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const homeRouter = require('./home');
const productRouter = require('./products');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    //app.use('/', siteRouter);
    app.use('/products', productRouter);
    app.use('/', homeRouter);
    app.use('/home', homeRouter);
    app.use('/search', siteRouter);
}

module.exports = route;

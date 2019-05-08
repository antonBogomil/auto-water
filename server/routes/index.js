const user = require('./user');
const admin = require('./admin');
const article = require('./article');
// const path = require('path');
module.exports = function (app) {
    app.use('/api/article',article);
    app.use('/api', user);
    app.use('/api/admin',admin);

};
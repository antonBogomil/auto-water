const user = require('./user');
const admin = require('./admin');
// const path = require('path');
module.exports = function (app) {
    app.use('/api', user);
    app.use('/api/admin',admin)
};
const COOKIE_TOKEN = require("../constants").COOKIE_TOKEN;
const {User} = require('../model/user');
const auth = (req, res, next) => {
    let token = req.cookies[COOKIE_TOKEN];
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({isAuth: false});
        req.token = token;
        req.user = user;
        next();
    });
};
module.exports = {auth};
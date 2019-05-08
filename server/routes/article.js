const express = require("express");
const {ROLE_ADMIN} = require("../constants");
const {Article} = require('../model/ariticle');
const auth = require("../middleware/auth").auth;
const admin = require("../middleware/admin").admin;
const router = express.Router();
router.get('/', auth, (req, res) => {
    console.log(req.query.name);
    // const name = req.params;
    // Article.findOne({name: ''}, (err, article) => {
    //     if (!article) return res.json({message: ERRORS.ARTICLE_NOT_FOUND, success: false});
    //     return res.json({article: article});
    // })
});
router.post('/save', auth,admin, (req, res) => {
    const article = new Article(req.body.article);
    // Article.findOne({name: ''}, (err, article) => {
    //     if (!article) return res.json({message: ERRORS.ARTICLE_NOT_FOUND, success: false});
    //     return res.json({article: article});
    // })
});
module.exports = router;
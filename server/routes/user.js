const express = require("express");
const auth = require("../middleware/auth").auth;
const admin = require("../middleware/admin").admin;
const router = express.Router();
const {ROLE_ADMIN, COOKIE_TOKEN, ERRORS} = require("../constants");
const {User} = require("../model/user");
const {UFile} = require("../model/ufile");
router.get('/auth', auth, (req, res) => {
    return res.json({
        success: true,
        user: {
            isAdmin: req.user.role === ROLE_ADMIN,
            email: req.user.email,
            id: req.user.id,
            name: req.user.name,
            image :req.user.image
        }
    })
});

router.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
        if (err) {
            if (err.code===11000){
                return res.json({success: false, exist:true})
            }
            return res.json({success: false, err})
        }
        res.status(200).json({success: true})
    });
});
router.get('/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id}, {token: ''}, (err, doc) => {
        if (err) return res.json({err, success: false});
        return res.status(200).send({
            success: true
        })
    })
});
router.post('/login', (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if (!user) return res.json({message: ERRORS.EMAIL_NOT_FOUND, success: false});
        user.comparePassword(password, (err, isMatch) => {
            if (!isMatch) return res.json({success: false, message: ERRORS.WRONG_PASSWORD});
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie(COOKIE_TOKEN, user.token).status(200).json({
                    success: true,
                    user: {
                        name: user.name,
                        id: user.id,
                        email: user.email,
                        isAdmin: user.role === ROLE_ADMIN,
                        image : ''
                    }
                });
            })
        })
    })
});

router.get('/user/:id', auth, (req, res) => {
    User.findById(req.params.id, {email: 1, name: 1, number: 1}, (err, user) => {
        if (err) return res.json({err, success: false});
        UFile.find({"user": user}, (err, files) => {
            if (err) return res.json({err, success: false});
            return res.json({
                success: true,
                files
            });
        });
    });
});

module.exports = router;
const express = require("express");
const auth = require("../middleware/auth").auth;
const admin = require("../middleware/admin").admin;
const router = express.Router();
const {UFile} = require("../model/ufile");
const {User} = require("../model/user");
var fs = require('fs');

router.get('/users', auth, admin, (req, res) => {
    User.find({"role": 0}, {email: 1, name: 1, number: 1}, (err, docs) => {
        if (err) return res.json({err, success: false});
        return res.json({
            success: true,
            users: docs
        });
    });
});
router.get('/users/:id', auth, admin, (req, res) => {
    User.findById(req.params.id, {email: 1, name: 1, number: 1}, (err, user) => {
        if (err) return res.json({err, success: false});
        UFile.find({"user": user}, (err, files) => {
            if (err) return res.json({err, success: false});
            return res.json({
                success: true,
                user,
                files
            });
        });
    });
});
router.post('/upload', auth, admin, (req, res) => {
    const uploadedFile = req.files.file;
    const {description, userId} = req.body;
    let tmpPath = uploadedFile.path;
    let newPath =   'media/'+uploadedFile.name;
    fs.rename(tmpPath, newPath, function (err) {
        if (err) throw err;
        fs.unlink(tmpPath, function () {
            if (err) throw err;
            const newUFile = new UFile(
                {
                    name: uploadedFile.name,
                    user: userId,
                    description: description,
                    type: uploadedFile.type
                }
            );
            newUFile.save((err,doc)=>{
                if (err) {
                    if (err.code===11000){
                        return res.json({success: false, exist:true})
                    }
                    return res.json({success: false, err})
                }
                res.status(200).json({success: true})
            })
        });
    });
});
module.exports = router;
const express = require("express");
const router = express.Router();
const UserProfile = require("../../models/UserProfile");

//Load userProfiles model

// @route POST api/userprofiles/submit
// @desc Submit User Profile
// @access Public
router.post("/submit", (req, res) => {
    UserProfile.findOne({email: req.body.email}).then(userProfile => {
        if (userProfile) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUserProfile = new UserProfile({
                name: req.body.name,
                email: req.body.email,
                college: req.body.college,
                phone: req.body.phone,
                course: req.body.course,
                isCompleted: Boolean(req.body.isCompleted)
            });
            newUserProfile
                .save()
                .then(userProfile => res.json(userProfile))
                .catch(err => console.log(err));
        }
    });
});

// @route POST api/userprofiles/update/:email
// @desc Update User Profile
// @access Public
router.post("/update/:id", (req, res) => {
    UserProfile.findByIdAndUpdate(
        req.params.id,
        req.body,
        { upsert: true },
        function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
});

// @route GET api/userprofiles/:email
// @desc Get User Profile
// @access Public
router.get("/:id", (req, res) => {
    UserProfile.findById(req.params.id)
    .then(userProfile => res.json(userProfile))
    .catch(err => console.log(err));
});

module.exports = router;
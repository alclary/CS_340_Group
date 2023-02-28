const express = require("express");
const router = express.Router();
const db = require("../db.js");

// READ functionality for customers table, at '/customers' endpoint
router.get("/", (req, res) => {
    console.log(req);
    db.query("SELECT * FROM Customer;", (err, data, fields) => {
        if (err) console.error(err);
        res.status(200).json({
            fields,
            data,
        });
    });
});

// CREATE functionality for entries to customers table, at '/customers' endpoint
router.post("/", (req, res) => {
    console.log("POST request received.");
    db.query(
        "INSERT INTO `Customer` (`first_name`, `last_name`, `dob`, `email`) VALUES (?,?,?,?);",
        [req.body.fname, req.body.lname, req.body.dob, req.body.email],
        (err, data, fields) => {
            if (err) {
                console.error(err);
                res.status();
            }
            res.status(200).json({
                fields,
                data,
            });
            console.log("POST request successful.");
        }
    );
});

// TODO UPDATE functionality for customers table record, at '/customers' endpoint
// TODO DELETE functionality for customers table record, at '/customers' endpoint

module.exports = router;

// routes/tournamentRoutes.js
const express = require('express');
const Tournament = require('../models/Tournament');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateToken, (req, res) => {
    const tournament = new Tournament({
        name: req.body.name,
        date: req.body.date,
        participants: req.body.participants
    });

    tournament.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tournament."
            });
        });
});

module.exports = router;
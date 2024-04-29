const express = require('express');
const router = express.Router();
const tournamentValidations = require('../validations/tournamentValidations');
const tournamentController = require('../controllers/tournamentController');

router.post('/create-payment', tournamentValidations.validateTournament, tournamentValidations.validatePayment, tournamentController.createPayment);
router.post('/create-free', tournamentValidations.validateTournament, tournamentController.createFreeTournament);
router.get('/retrieve/:tournamentid', tournamentValidations.validateTournamentId, tournamentController.retrieveTournament);

module.exports = router;
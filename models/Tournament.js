// models/Tournament.js
const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: String,
    date: Date,
    participants: [String]
});

module.exports = mongoose.model('Tournament', tournamentSchema);
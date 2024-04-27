// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const tournamentRoutes = require('./routes/tournamentRoutes');


const app = express();

mongoose.connect('mongodb://<your-mongodb-url>', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/tournament', tournamentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
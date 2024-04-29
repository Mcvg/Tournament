const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/tournamentRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/v1/operations/enterteinment/management/videogames/games-tournament', paymentRoutes);

const port = 80;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
const moment = require('moment');

exports.validateTournament = (req, res, next) => {
  const messageId = req.headers['messageid'];
  if (!messageId) {
    return res.status(400).json({ message: 'El header messageID es obligatorio.' });
  }

  const { type, category, date, hour } = req.body;

  // Validaciones
  if (!type || !category || !date || !hour) {
    return res.status(400).json({ message: 'Faltan campos necesarios para crear el torneo.' });
  }

  if (!moment(date, 'YYYY-MM-DD', true).isValid() || !moment(date).isAfter(moment().startOf('day'))) {
    return res.status(400).json({ message: 'La fecha es inválida o ya ha pasado.' });
  }

  if (!moment(hour, 'HH:mm:ss', true).isValid()) {
    return res.status(400).json({ message: 'El formato de la hora es inválido.' });
  }

  next();
};

exports.validatePayment = (req, res, next) => {
    const { currency, price} = req.body;
  
    // Validaciones
    if (!currency || !price ) {
      return res.status(400).json({ message: 'Faltan campos necesarios para crear el torneo.' });
    }
    next();
  };

exports.validateTournamentId = (req, res, next) => {

    const messageId = req.headers['messageid'];
    if (!messageId) {
        return res.status(400).json({ message: 'El header messageID es obligatorio.' });
    }

    const tournamentId = req.params.tournamentid;
    if (!tournamentId) {
      return res.status(400).json({ message: 'El ID del torneo es obligatorio.' });
    }
    next();
  };
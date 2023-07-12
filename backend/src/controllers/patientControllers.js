/* eslint-disable prefer-destructuring */
const models = require("../models");

const browse = (req, res) => {
  models.patient
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.patient
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        const patient = rows[0];
        delete patient.hashedPassword;
        res.send(patient);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const patient = req.body;

  // TODO validations (length, format...)

  patient.id = parseInt(req.params.id, 10);

  models.patient
    .update(patient)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res, next) => {
  const patient = req.body;

  // TODO validations (length, format...)

  models.patient
    .insert(patient)
    .then(() => {
      // res.location(`/patients/${result.insertId}`).sendStatus(201);
      // res.location(`/patients/${result.insertId}`);
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.patient
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res, next) => {
  const { mail } = req.body;

  models.patient
    .findByEmail(mail)
    .then(([patients]) => {
      if (patients[0] != null) {
        req.patient = patients[0];
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
};

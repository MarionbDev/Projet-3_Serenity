const models = require("../models");

const browse = (req, res) => {
  models.doctor
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
  models.doctor
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const doctor = req.body;

  // TODO validations (length, format...)

  doctor.id = parseInt(req.params.id, 10);

  models.doctor
    .update(doctor)
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

const add = (req, res) => {
  const doctor = req.body;

  // TODO validations (length, format...)

  models.doctor
    .insert(doctor)
    .then(([result]) => {
      res.location(`/doctors/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.doctor
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

const login = (req, res) => {
  const { mail, password } = req.body;

  models.doctor
    .findByEmail(mail)
    .then(([doctors]) => {
      if (doctors.length === 0) {
        res.sendStatus(404);
      } else if (doctors[0].password !== password) {
        res.sendStatus(404);
      } else {
        const doctor = { ...doctors[0] };
        delete doctor.password;
        res.json(doctor);
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

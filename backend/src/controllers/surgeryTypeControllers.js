const models = require("../models");

const browse = (req, res) => {
  models.surgeryType
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
  models.surgeryType
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
  const surgeryType = req.body;

  // TODO validations (length, format...)

  surgeryType.id = parseInt(req.params.id, 10);

  models.surgeryType
    .update(surgeryType)
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
  const surgeryType = req.body;

  // TODO validations (length, format...)

  models.surgeryType
    .insert(surgeryType)
    .then(([result]) => {
      res.sendStatus(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.surgeryType
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

const allInterventions = (req, res) => {
  const idDoctor = req.params.id;

  models.surgeryType
    .findAllInterventions(parseInt(idDoctor, 10))
    .then(([rows]) => {
      if (rows.length === 0) {
        res.json([]);
      } else {
        const surgeryTypes = [];

        for (let i = 0; i < rows.length; i += 1) {
          const {
            id,
            name,
            time,
            interventionId,
            patientId,
            lastname,
            firstname,
          } = rows[i];
          if (i !== 0 && surgeryTypes[surgeryTypes.length - 1].name === name) {
            surgeryTypes[surgeryTypes.length - 1].count += 1;
            surgeryTypes[surgeryTypes.length - 1].interventions.push({
              id: interventionId,
              time,
              patient: {
                id: patientId,
                lastname,
                firstname,
              },
            });
          } else {
            surgeryTypes.push({
              id,
              name,
              count: 1,
              interventions: [
                {
                  id: interventionId,
                  time,
                  patient: { id: patientId, lastname, firstname },
                },
              ],
            });
          }
        }

        res.send(surgeryTypes);
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
  allInterventions,
};

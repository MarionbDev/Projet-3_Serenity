const models = require("../models");
require("dotenv").config();

const { TOKEN_API } = process.env;

const browse = (req, res) => {
  models.profesionnel
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
  models.profesionnel
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
  const profesionnel = req.body;

  // TODO validations (length, format...)

  profesionnel.id = parseInt(req.params.id, 10);

  models.profesionnel
    .update(profesionnel)
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
  const profesionnel = req.body;

  // TODO validations (length, format...)

  models.profesionnel
    .insert(profesionnel)
    .then(([result]) => {
      models.profesionnel
        .find(result.insertId)
        .then(([pro]) => {
          fetch(
            `https://api.geoapify.com/v1/geocode/search?text=${pro[0].road} ${pro[0].zip_code} ${pro[0].city} ${pro[0].country}&apiKey=${TOKEN_API}`
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const proId = data;
              proId.latitude = data.features[0].properties.lat;
              proId.longitude = data.features[0].properties.lon;
              proId.id = result.insertId;
              models.profesionnel
                .updateLatLong(proId)
                .then(([resultnewLatLong]) => {
                  if (resultnewLatLong.affectedRows === 0) {
                    res.sendStatus(404);
                  } else {
                    res.sendStatus(204);
                  }
                })
                .catch((err) => {
                  console.error(err);
                  res.sendStatus(500);
                });
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.profesionnel
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

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};

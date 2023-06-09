const router = require("express").Router();
// const connection = require("../");

// const getInterventions = (req, res) => {
//   const sql =
//     "SELECT surgery_type.name, count(intervention.id) AS intervention_count FROM surgery_type JOIN doctor ON doctor.id = doctor_id JOIN intervention ON intervention.id = intervention_id WHERE doctor.id = ? GROUP BY surgery_type.id;";
//   connection
//     .query(sql)
//     .then(([interventions]) => res.json(interventions))
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

const interventionControllers = require("../controllers/interventionControllers");

router.get("/", interventionControllers.browse);
router.get("/:id", interventionControllers.read);
router.put("/:id", interventionControllers.edit);
router.post("/", interventionControllers.add);
router.delete("/:id", interventionControllers.destroy);

module.exports = router;

const router = require("express").Router();

const patientControllers = require("../controllers/patientControllers");
const interventionControllers = require("../controllers/interventionControllers");

router.get("/", patientControllers.browse);
router.get("/:id", patientControllers.read);
router.get("/:id/home", interventionControllers.findIntervention);
router.put("/:id", patientControllers.edit);
router.post("/", patientControllers.add);
router.post("/login", patientControllers.login);
router.delete("/:id", patientControllers.destroy);

module.exports = router;

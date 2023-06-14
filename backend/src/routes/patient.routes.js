const router = require("express").Router();

const patientControllers = require("../controllers/patientControllers");
const interventionControllers = require("../controllers/interventionControllers");
const passwordControllers = require("../controllers/passwordControllers");

router.get("/", patientControllers.browse);
router.get("/:id", patientControllers.read);
router.get("/:id/home", interventionControllers.findIntervention);
router.put("/:id", passwordControllers.hashPassword, patientControllers.edit);
router.post("/", passwordControllers.hashPassword, patientControllers.add);
router.post(
  "/login",
  patientControllers.login,
  passwordControllers.verifyPassword
);
router.delete("/:id", patientControllers.destroy);

module.exports = router;

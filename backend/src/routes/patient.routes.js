const router = require("express").Router();

const patientControllers = require("../controllers/patientControllers");
const interventionControllers = require("../controllers/interventionControllers");
const passwordControllers = require("../controllers/passwordControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", patientControllers.browse);
router.get("/:id", patientControllers.read);
router.get(
  "/:id/home",
  authControllers.verifyToken,
  interventionControllers.findIntervention
);
router.put("/:id", passwordControllers.hashPassword, patientControllers.edit);
router.post("/", passwordControllers.hashPassword, patientControllers.add);
router.post(
  "/login",
  patientControllers.login,
  passwordControllers.verifyPassword,
  authControllers.createToken
);
router.delete("/:id", patientControllers.destroy);

module.exports = router;

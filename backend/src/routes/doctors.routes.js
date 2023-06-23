const router = require("express").Router();

const doctorControllers = require("../controllers/doctorControllers");
const surgeryTypeControllers = require("../controllers/surgeryTypeControllers");
const passwordControllers = require("../controllers/passwordControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", doctorControllers.browse);
router.get("/:id", authControllers.verifyToken, doctorControllers.read);
router.get("/:id/interventions", surgeryTypeControllers.allInterventions);
router.put("/:id", passwordControllers.hashPassword, doctorControllers.edit);
router.post("/", passwordControllers.hashPassword, doctorControllers.add);
router.post(
  "/login",
  doctorControllers.login,
  passwordControllers.verifyPassword,
  authControllers.createToken
);
router.get("/:id/praticiens", doctorControllers.findSurgeriesAndPatients);
router.delete("/:id", doctorControllers.destroy);

module.exports = router;

const router = require("express").Router();

const doctorControllers = require("../controllers/doctorControllers");
const surgeryTypeControllers = require("../controllers/surgeryTypeControllers");

router.get("/", doctorControllers.browse);
router.get("/:id", doctorControllers.read);
router.get("/:id/interventions", surgeryTypeControllers.allInterventions);
router.get("/:id/praticien", doctorControllers);
router.put("/:id", doctorControllers.edit);
router.post("/", doctorControllers.add);
router.post("/login", doctorControllers.login);
router.delete("/:id", doctorControllers.destroy);

module.exports = router;

const router = require("express").Router();

const patientControllers = require("../controllers/patientControllers");

router.get("/", patientControllers.browse);
router.get("/:id", patientControllers.read);
router.put("/:id", patientControllers.edit);
router.post("/", patientControllers.add);
router.delete("/:id", patientControllers.destroy);

module.exports = router;

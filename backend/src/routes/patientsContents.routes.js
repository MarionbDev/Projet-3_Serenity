const router = require("express").Router();

const patientContentControllers = require("../controllers/patientContentControllers");
const uploadPatientContentControllers = require("../controllers/uploadPatientContentControllers");

router.get("/", patientContentControllers.browse);
router.get("/:id", patientContentControllers.read);
router.put("/:id", patientContentControllers.edit);
router.post(
  "/",
  uploadPatientContentControllers.uploadFiles,
  patientContentControllers.add
);
router.delete("/:id", patientContentControllers.destroy);

module.exports = router;

const router = require("express").Router();
const doctorsRouter = require("./doctors.routes");
const patientsRouter = require("./patient.routes");
const contentsRouter = require("./contents.routes");
const interventionsRouter = require("./interventions.routes");
const profesionnelsRouter = require("./profesionnels.routes");
const checklistsRouter = require("./checklists.routes");

router.use("/doctors", doctorsRouter);
router.use("/patients", patientsRouter);
router.use("/contents", contentsRouter);
router.use("/interventions", interventionsRouter);
router.use("/profesionnels", profesionnelsRouter);
router.use("/checklists", checklistsRouter);

module.exports = router;

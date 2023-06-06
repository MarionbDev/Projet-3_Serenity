const router = require("express").Router();
const doctorsRouter = require("./doctors.routes");
const patientsRouter = require("./patient.routes");
const contentsRouter = require("./contents.routes");
const interventionsRouter = require("./interventions.routes");
const profesionnelsRouter = require("./profesionnels.routes");
const checklistsRouter = require("./checklists.routes");
const podcastsRouter = require("./podcasts.routes");
const surgeryTypesRouter = require("./surgeryTypes.routes");
const protocolRouter = require("./protocols.routes");

router.use("/doctors", doctorsRouter);
router.use("/patients", patientsRouter);
router.use("/contents", contentsRouter);
router.use("/interventions", interventionsRouter);
router.use("/profesionnels", profesionnelsRouter);
router.use("/checklists", checklistsRouter);
router.use("/podcasts", podcastsRouter);
router.use("/surgeryTypes", surgeryTypesRouter);
router.use("/protocols", protocolRouter);

module.exports = router;

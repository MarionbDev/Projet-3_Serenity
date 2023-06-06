const router = require("express").Router();
const itemsRouter = require("./items.routes");
const doctorsRouter = require("./doctors.routes");
const patientsRouter = require("./patient.routes");
const podcastsRouter = require("./podcasts.routes");
const surgeryTypesRouter = require("./surgeryTypes.routes");
const protocolRouter = require("./protocols.routes");

router.use("/items", itemsRouter);
router.use("/doctors", doctorsRouter);
router.use("/patients", patientsRouter);
router.use("/podcasts", podcastsRouter);
router.use("/surgeryTypes", surgeryTypesRouter);
router.use("/protocols", protocolRouter);

module.exports = router;

const router = require("express").Router();
const itemsRouter = require("./items.routes");
const doctorsRouter = require("./doctors.routes");
const patientsRouter = require("./patient.routes");

router.use("/items", itemsRouter);
router.use("/doctors", doctorsRouter);
router.use("/patients", patientsRouter);

module.exports = router;

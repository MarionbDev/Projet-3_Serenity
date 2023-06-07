const router = require("express").Router();

const doctorControllers = require("../controllers/doctorControllers");

router.get("/", doctorControllers.browse);
router.get("/:id", doctorControllers.read);
router.put("/:id", doctorControllers.edit);
router.post("/", doctorControllers.add);
router.post("/login", doctorControllers.login);
router.delete("/:id", doctorControllers.destroy);

module.exports = router;

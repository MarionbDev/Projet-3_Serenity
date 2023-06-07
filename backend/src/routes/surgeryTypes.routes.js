const router = require("express").Router();

const surgeryTypeControllers = require("../controllers/surgeryTypeControllers");

router.get("/", surgeryTypeControllers.browse);
router.get("/:id", surgeryTypeControllers.read);
router.put("/:id", surgeryTypeControllers.edit);
router.post("/", surgeryTypeControllers.add);
router.delete("/:id", surgeryTypeControllers.destroy);

module.exports = router;

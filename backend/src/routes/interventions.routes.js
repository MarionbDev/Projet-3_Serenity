const router = require("express").Router();

const interventionControllers = require("../controllers/interventionControllers");

router.get("/", interventionControllers.browse);
router.get("/:id", interventionControllers.read);
router.put("/:id", interventionControllers.edit);

router.post("/", interventionControllers.add);
router.delete("/:id", interventionControllers.destroy);

module.exports = router;

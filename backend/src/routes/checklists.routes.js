const router = require("express").Router();

const checklistControllers = require("../controllers/checklistControllers");

router.get("/", checklistControllers.browse);
router.get("/:id", checklistControllers.read);
router.put("/:id", checklistControllers.edit);
router.post("/", checklistControllers.add);
router.delete("/:id", checklistControllers.destroy);

module.exports = router;

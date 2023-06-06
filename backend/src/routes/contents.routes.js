const router = require("express").Router();

const contentControllers = require("../controllers/contentControllers");

router.get("/", contentControllers.browse);
router.get("/:id", contentControllers.read);
router.put("/:id", contentControllers.edit);
router.post("/", contentControllers.add);
router.delete("/:id", contentControllers.destroy);

module.exports = router;

const router = require("express").Router();

const podcastControllers = require("../controllers/podcastControllers");

router.get("/", podcastControllers.browse);
router.get("/:id", podcastControllers.read);
router.put("/:id", podcastControllers.edit);
router.post("/", podcastControllers.add);
router.delete("/:id", podcastControllers.destroy);

module.exports = router;

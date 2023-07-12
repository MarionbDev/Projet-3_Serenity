const router = require("express").Router();

const contentControllers = require("../controllers/contentControllers");
const uploadContentControllers = require("../controllers/uploadContentsControllers");

router.get("/", contentControllers.browse);
router.get("/:id", contentControllers.read);
router.put("/:id", contentControllers.edit);
router.post(
  "/",
  uploadContentControllers.uploadContent,
  contentControllers.add
);
router.delete("/:id", contentControllers.destroy);

module.exports = router;

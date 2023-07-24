const router = require("express").Router();

const profesionnelControllers = require("../controllers/profesionnelControllers");
const uploadContentControllers = require("../controllers/uploadContentsControllers");

router.get("/", profesionnelControllers.browse);
router.get("/:id", profesionnelControllers.read);
router.put("/:id", profesionnelControllers.edit);
router.post(
  "/",
  uploadContentControllers.uploadContent,
  profesionnelControllers.add
);
router.delete("/:id", profesionnelControllers.destroy);

module.exports = router;

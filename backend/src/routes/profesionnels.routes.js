const router = require("express").Router();

const profesionnelControllers = require("../controllers/profesionnelControllers");
const uploadProControllers = require("../controllers/uploadProControllers");

router.get("/", profesionnelControllers.browse);
router.get("/:id", profesionnelControllers.read);
router.put("/:id", profesionnelControllers.edit);
router.post("/", uploadProControllers.uploadPro, profesionnelControllers.add);
router.delete("/:id", profesionnelControllers.destroy);

module.exports = router;

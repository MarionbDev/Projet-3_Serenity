const router = require("express").Router();

const profesionnelControllers = require("../controllers/profesionnelControllers");

router.get("/", profesionnelControllers.browse);
router.get("/:id", profesionnelControllers.read);
router.put("/:id", profesionnelControllers.edit);
router.post("/", profesionnelControllers.add);
router.delete("/:id", profesionnelControllers.destroy);

module.exports = router;

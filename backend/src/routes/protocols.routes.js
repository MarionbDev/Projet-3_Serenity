const router = require("express").Router();

const protocolControllers = require("../controllers/protocolControllers");

router.get("/", protocolControllers.browse);
router.get("/:id", protocolControllers.read);
router.put("/:id", protocolControllers.edit);
router.post("/", protocolControllers.add);
router.delete("/:id", protocolControllers.destroy);

module.exports = router;

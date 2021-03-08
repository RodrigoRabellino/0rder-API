const { Router } = require("express");
const controller = require("../controllers/users");
const router = Router();

router.get("/:email", controller.list);
router.post("/", controller.create);
router.put("/:id", controller.edit);
router.delete("/:id", controller.del);

module.exports = router;

const { Router } = require("express");
const controller = require("../controllers/orders");
const router = Router();

router.get("/", controller.list);
router.post("/", controller.create);
router.put("/:id", controller.edit);
router.delete("/:id", controller.del);

module.exports = router;

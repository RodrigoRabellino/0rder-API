const {Router} = require("express")
const controller = require("../controllers/orders")
const router = Router()

router.get("/", controller.list)
router.post("/", controller.create)
router.put("/", controller.edit)
router.delete("/", controller.del)

module.exports = router
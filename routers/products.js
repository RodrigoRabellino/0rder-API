const {Router} = require("express")
const controller = require("../controllers/products")
const router = Router()

router.get("/", controller.list)
router.post("/", controller.create)
router.put("/", controller.edit)
router.delete("/", controller.del)

module.exports = router
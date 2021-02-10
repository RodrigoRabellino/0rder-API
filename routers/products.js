const {Router} = require("express")
const controller = require("../controllers/products")
const router = Router()

router.get('/', controller.list)

module.exports = router
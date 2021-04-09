import express from "express"
import {create, findID, read, remove, list, update, photo} from '../controllers/product.js'
const router = express.Router();

router.get("/product/:productID", read)
router.get("/products", list)
router.get("/product/photo/:productID", photo)

router.delete("/product/:productID", remove)

router.post('/products/create', create)

router.put("/product/:productID", update)

router.param("productID", findID)

module.exports = router;
